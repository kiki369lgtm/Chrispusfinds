const pool = require('../config/db');

const Product = {
    async create(data) {
        const {
            name, category, subcategory, cash_price, deposit,
            weekly_installment, image_urls, description,
            full_details, cloudinary_public_id
        } = data;
        
        const query = `
            INSERT INTO products (
                name, category, subcategory, cash_price, deposit,
                weekly_installment, image_urls, description,
                full_details, cloudinary_public_id
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            RETURNING *;
        `;
        const values = [
            name, category, subcategory, cash_price, deposit,
            weekly_installment,
            Array.isArray(image_urls) ? image_urls : [],
            description,
            typeof full_details === 'string' ? full_details : JSON.stringify(full_details || {}),
            cloudinary_public_id
        ];
        const { rows } = await pool.query(query, values);
        return rows[0];
    },

    async findAll(filters = {}) {
        const { category, subcategory, search, brand, limit = 50, offset = 0 } = filters;
        let query = `SELECT *, image_urls[1] AS image_url FROM products WHERE is_active = true`;
        const values = [];
        let count = 0;

        if (category) {
            query += ` AND category = $${++count}`;
            values.push(category);
        }
        if (subcategory) {
            query += ` AND subcategory = $${++count}`;
            values.push(subcategory);
        }
        if (brand) {
            query += ` AND subcategory = $${++count}`;
            values.push(brand);
        }
        if (search) {
            query += ` AND (name ILIKE $${++count} OR description ILIKE $${count})`;
            values.push(`%${search}%`);
        }

        query += ` ORDER BY created_at DESC LIMIT $${++count} OFFSET $${++count}`;
        values.push(limit, offset);

        const { rows } = await pool.query(query, values);
        return rows;
    },

    async findById(id) {
        const { rows } = await pool.query('SELECT *, image_urls[1] AS image_url FROM products WHERE id = $1', [id]);
        return rows[0] || null;
    },

    async update(id, updates) {
        const fields = [];
        const values = [];
        let count = 0;

        for (const [key, value] of Object.entries(updates)) {
            if (value !== undefined && key !== 'id') {
                fields.push(`${key} = $${++count}`);
                if (key === 'image_urls' && Array.isArray(value)) {
                    values.push(value);
                } else if (key === 'full_details' && typeof value !== 'string') {
                    values.push(JSON.stringify(value));
                } else {
                    values.push(value);
                }
            }
        }

        if (fields.length === 0) return null;
        fields.push(`updated_at = CURRENT_TIMESTAMP`);
        values.push(id);

        const query = `UPDATE products SET ${fields.join(', ')} WHERE id = $${++count} RETURNING *;`;
        const { rows } = await pool.query(query, values);
        return rows[0] || null;
    },

    async delete(id) {
        const { rowCount } = await pool.query('DELETE FROM products WHERE id = $1', [id]);
        return rowCount > 0;
    },

    async suggest(query, limit = 8) {
        const sql = `
            WITH scored AS (
                SELECT
                    id, name, category, subcategory, cash_price,
                    image_urls, cloudinary_public_id, image_urls[1] AS image_url,
                    CASE
                        WHEN name ILIKE $1 THEN 0
                        WHEN name ILIKE $1 || '%' THEN 1
                        WHEN subcategory ILIKE $1 || '%' THEN 1
                        WHEN name ILIKE '%' || $1 || '%' THEN 2
                        WHEN category ILIKE '%' || $1 || '%' THEN 2
                        WHEN subcategory ILIKE '%' || $1 || '%' THEN 2
                        WHEN description ILIKE '%' || $1 || '%' THEN 2
                        WHEN full_details::text ILIKE '%' || $1 || '%' THEN 2
                        ELSE 3
                    END AS rank_tier,
                    GREATEST(
                        word_similarity($1, name),
                        word_similarity($1, COALESCE(subcategory, '')),
                        word_similarity($1, COALESCE(category, ''))
                    ) AS sim_score
                FROM products
                WHERE is_active = true
            )
            SELECT id, name, category, subcategory, cash_price, image_urls, cloudinary_public_id, image_url, rank_tier, sim_score
            FROM scored
            WHERE rank_tier < 3 OR sim_score > 0.3
            ORDER BY rank_tier ASC, sim_score DESC, name ASC
            LIMIT $2;
        `;
        const { rows } = await pool.query(sql, [query, limit]);
        return rows;
    },

    async getCategories() {
        const { rows } = await pool.query(
            'SELECT DISTINCT category, subcategory FROM products WHERE is_active = true ORDER BY category, subcategory'
        );
        return rows;
    }
};

module.exports = Product;