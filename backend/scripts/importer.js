// Imports backend/database/products.csv into the live products table.
// products.csv is the single source of truth for product data - re-run this
// after every edit to the CSV.
//
// Usage:  node scripts/importer.js [path-to-csv] [--apply]
// Without --apply this only prints a report (dry run, the default).
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');
const pool = require('../config/db');

const APPLY = process.argv.includes('--apply');
const fileArg = process.argv.slice(2).find((a) => !a.startsWith('--'));
const FILE_PATH = fileArg || path.join(__dirname, '..', 'database', 'products.csv');

// Frontend pages hardcode these category strings (Smartphones.jsx,
// Tablets.jsx) - remapping here means zero frontend files need to change.
const CATEGORY_MAP = {
    Phone: 'Mobile Phones',
    Tablet: 'Tablets',
};

const clean = (v) => (v && v.trim() !== '' ? v.trim() : null);
const cleanNumber = (v) => {
    const s = clean(v);
    if (s === null) return null;
    const n = Number(s);
    return Number.isFinite(n) ? n : null;
};
const parseArray = (v, rowLabel, fieldName) => {
    if (!v || v.trim() === '') return [];
    try {
        const parsed = JSON.parse(v);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        console.warn(`  ! row "${rowLabel}": could not parse ${fieldName} ("${v}") - using []`);
        return [];
    }
};

function buildFullDetails(raw) {
    let details;
    try {
        details = JSON.parse(raw || '{}');
    } catch {
        return {};
    }
    // Source has colors as a comma-separated string; the product detail
    // page's color-picker expects an array.
    if (typeof details.colors === 'string') {
        const colors = details.colors.split(',').map((c) => c.trim()).filter(Boolean);
        details.colors = colors.length ? colors : undefined;
    }
    return details;
}

function cleanRow(raw, rowNum) {
    const name = clean(raw.name);
    if (!name) return { skip: true, rowNum, reason: 'missing name' };

    const slug = clean(raw.slug);
    if (!slug) return { skip: true, rowNum, reason: 'missing slug', name };

    const cash_price = cleanNumber(raw.cash_price);
    if (cash_price === null || cash_price <= 0) {
        return { skip: true, rowNum, reason: `invalid cash_price (${raw.cash_price})`, name };
    }

    return {
        skip: false,
        rowNum,
        name,
        slug,
        brand: clean(raw.brand),
        category: CATEGORY_MAP[raw.category] || clean(raw.category),
        subcategory: clean(raw.subcategory),
        ram: clean(raw.ram),
        storage: clean(raw.storage),
        cash_price,
        deposit: cleanNumber(raw.deposit) ?? 0,
        weekly_installment: cleanNumber(raw.weekly_installment),
        stock_quantity: cleanNumber(raw.stock_quantity) ?? 0,
        is_active: String(raw.is_active).trim().toLowerCase() === 'true',
        image_urls: parseArray(raw.image_urls, name, 'image_urls'),
        cloudinary_public_ids: parseArray(raw.cloudinary_public_ids, name, 'cloudinary_public_ids'),
        description: clean(raw.description),
        full_details: buildFullDetails(raw.full_details),
    };
}

async function main() {
    console.log(`Mode: ${APPLY ? 'APPLY (writing to Postgres)' : 'DRY RUN (no writes, pass --apply to commit)'}`);
    console.log(`Reading: ${FILE_PATH}\n`);

    const raw = fs.readFileSync(FILE_PATH, 'utf8');
    const rawRows = parse(raw, { columns: true, skip_empty_lines: true, bom: true });

    const cleaned = rawRows.map((r, i) => cleanRow(r, i + 2));
    const invalid = cleaned.filter((r) => r.skip);
    const valid = cleaned.filter((r) => !r.skip);

    const seenSlugs = new Map();
    const kept = [];
    const duplicates = [];
    for (const r of valid) {
        if (seenSlugs.has(r.slug)) {
            duplicates.push({ ...r, reason: `duplicate slug, first seen at row ${seenSlugs.get(r.slug)}` });
        } else {
            seenSlugs.set(r.slug, r.rowNum);
            kept.push(r);
        }
    }

    console.log(`Read ${rawRows.length} rows.`);
    console.log(`Invalid/skipped (bad data): ${invalid.length}`);
    invalid.forEach((r) => console.log(`  row ${r.rowNum} (${r.name || 'no name'}): ${r.reason}`));
    console.log(`Duplicate slugs skipped: ${duplicates.length}`);
    duplicates.forEach((r) => console.log(`  row ${r.rowNum} "${r.name}": ${r.reason}`));
    console.log(`\nProducts to import: ${kept.length}`);

    if (!APPLY) {
        console.log('\nDry run only - no rows were written. Re-run with --apply to commit.');
        await pool.end();
        return;
    }

    const client = await pool.connect();
    let inserted = 0;
    let updated = 0;
    try {
        await client.query('BEGIN');
        for (const r of kept) {
            const { rows } = await client.query(
                `INSERT INTO products (
                    name, slug, brand, category, subcategory, ram, storage,
                    cash_price, deposit, weekly_installment, stock_quantity,
                    is_active, image_urls, cloudinary_public_ids, description, full_details
                ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)
                ON CONFLICT (slug) DO UPDATE SET
                    name = EXCLUDED.name,
                    brand = EXCLUDED.brand,
                    category = EXCLUDED.category,
                    subcategory = EXCLUDED.subcategory,
                    ram = EXCLUDED.ram,
                    storage = EXCLUDED.storage,
                    cash_price = EXCLUDED.cash_price,
                    deposit = EXCLUDED.deposit,
                    weekly_installment = EXCLUDED.weekly_installment,
                    stock_quantity = EXCLUDED.stock_quantity,
                    is_active = EXCLUDED.is_active,
                    image_urls = EXCLUDED.image_urls,
                    cloudinary_public_ids = EXCLUDED.cloudinary_public_ids,
                    description = EXCLUDED.description,
                    full_details = EXCLUDED.full_details,
                    updated_at = CURRENT_TIMESTAMP
                RETURNING (xmax = 0) AS inserted`,
                [
                    r.name, r.slug, r.brand, r.category, r.subcategory, r.ram, r.storage,
                    r.cash_price, r.deposit, r.weekly_installment, r.stock_quantity,
                    r.is_active, r.image_urls, r.cloudinary_public_ids, r.description,
                    JSON.stringify(r.full_details),
                ]
            );
            if (rows[0].inserted) inserted++; else updated++;
        }
        await client.query('COMMIT');
        console.log(`\nDone. Inserted ${inserted}, updated ${updated}, total live: ${inserted + updated}.`);
    } catch (err) {
        await client.query('ROLLBACK');
        console.error('\nImport failed, transaction rolled back:', err.message);
        process.exitCode = 1;
    } finally {
        client.release();
        await pool.end();
    }
}

main().catch((err) => {
    console.error('Fatal error:', err);
    process.exit(1);
});
