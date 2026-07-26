const pool = require('../config/db');

const User = {
    async create({ firstName, lastName, email, phoneNumber, passwordHash }) {
        const query = `
            INSERT INTO users (first_name, last_name, email, phone_number, password_hash, auth_provider)
            VALUES ($1, $2, $3, $4, $5, 'local')
            RETURNING *;
        `;
        const { rows } = await pool.query(query, [firstName, lastName, email, phoneNumber, passwordHash]);
        return rows[0];
    },

    async createFromGoogle({ firstName, lastName, email, googleId, profilePicture }) {
        const query = `
            INSERT INTO users (first_name, last_name, email, phone_number, auth_provider, google_id, profile_picture, email_verified)
            VALUES ($1, $2, $3, NULL, 'google', $4, $5, true)
            RETURNING *;
        `;
        const { rows } = await pool.query(query, [firstName, lastName, email, googleId, profilePicture]);
        return rows[0];
    },

    async findByEmailOrPhone(identifier) {
        const { rows } = await pool.query(
            'SELECT * FROM users WHERE email = $1 OR phone_number = $1',
            [identifier]
        );
        return rows[0] || null;
    },

    async findByEmail(email) {
        const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        return rows[0] || null;
    },

    async findByGoogleId(googleId) {
        const { rows } = await pool.query('SELECT * FROM users WHERE google_id = $1', [googleId]);
        return rows[0] || null;
    },

    async linkGoogleAccount(id, googleId, profilePicture) {
        const { rows } = await pool.query(
            `UPDATE users
             SET google_id = $1,
                 profile_picture = COALESCE(profile_picture, $2),
                 updated_at = CURRENT_TIMESTAMP
             WHERE id = $3
             RETURNING *;`,
            [googleId, profilePicture, id]
        );
        return rows[0] || null;
    },

    async findById(id) {
        const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return rows[0] || null;
    },

    async updatePassword(id, passwordHash) {
        const { rows } = await pool.query(
            'UPDATE users SET password_hash = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *;',
            [passwordHash, id]
        );
        return rows[0] || null;
    },

    async markEmailVerified(id) {
        const { rows } = await pool.query(
            'UPDATE users SET email_verified = true, updated_at = CURRENT_TIMESTAMP WHERE id = $1 RETURNING *;',
            [id]
        );
        return rows[0] || null;
    },
};

const sanitizeUser = (user) => {
    if (!user) return null;
    const safe = { ...user };
    delete safe.password_hash;
    return safe;
};

module.exports = { User, sanitizeUser };
