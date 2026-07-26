const pool = require('../config/db');

const Product = {
    async create(data) {
        const {
            name, category, subcategory, cash_price, deposit,
            daily_installment, installment_months, image, images,
            description, full_details
        } = data;

        const query = `
            INSERT INTO products (
                name, category, subcategory, cash_price, deposit,
                daily_installment, installment_months, image, images,
                description, full_details
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
            RETURNING *;
        `;
        const values = [
            name, category, subcategory, cash_price, deposit,
            daily_installment, installment_months, image,
            JSON.stringify(images || []), description,
            JSON.stringify(full_details || {})
        ];
        const { rows } = await pool.query(query, values);
        return rows[0];
    },

    async findAll(filters = {}) {
        const { category, subcategory, search, limit = 50, offset = 0 } = filters;
        let query = `SELECT * FROM products WHERE is_active = true`;
        const values = [];
        let count = 0;

        if (category) {
            query += ` AND category ILIKE $${++count}`;
            values.push(category);
        }
        if (subcategory) {
            query += ` AND subcategory ILIKE $${++count}`;
            values.push(subcategory);
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
        const { rows } = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
        return rows[0] || null;
    },

    async update(id, updates) {
        const fields = [];
        const values = [];
        let count = 0;

        for (const [key, value] of Object.entries(updates)) {
            if (value !== undefined && key !== 'id') {
                fields.push(`${key} = $${++count}`);
                values.push(
                    (key === 'images' || key === 'full_details') && typeof value !== 'string' 
                        ? JSON.stringify(value) 
                        : value
                );
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
                    id, name, category, subcategory, cash_price, image,
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
            SELECT id, name, category, subcategory, cash_price, image, rank_tier, sim_score
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