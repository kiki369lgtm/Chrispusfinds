const pool = require('../config/db');

const RefreshToken = {
    async create({ userId, tokenHash, expiresAt, rememberMe, userAgent }) {
        const { rows } = await pool.query(
            `INSERT INTO refresh_tokens (user_id, token_hash, expires_at, remember_me, user_agent)
             VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
            [userId, tokenHash, expiresAt, !!rememberMe, userAgent || null]
        );
        return rows[0];
    },

    async findValidByHash(tokenHash) {
        const { rows } = await pool.query(
            `SELECT * FROM refresh_tokens
             WHERE token_hash = $1 AND revoked_at IS NULL AND expires_at > NOW()`,
            [tokenHash]
        );
        return rows[0] || null;
    },

    async revokeByHash(tokenHash) {
        await pool.query(
            'UPDATE refresh_tokens SET revoked_at = CURRENT_TIMESTAMP WHERE token_hash = $1',
            [tokenHash]
        );
    },

    async revokeAllForUser(userId) {
        await pool.query(
            'UPDATE refresh_tokens SET revoked_at = CURRENT_TIMESTAMP WHERE user_id = $1 AND revoked_at IS NULL',
            [userId]
        );
    },
};

const UserToken = {
    async create({ userId, tokenHash, type, expiresAt }) {
        const { rows } = await pool.query(
            `INSERT INTO user_tokens (user_id, token_hash, type, expires_at)
             VALUES ($1, $2, $3, $4) RETURNING *;`,
            [userId, tokenHash, type, expiresAt]
        );
        return rows[0];
    },

    async findValid(tokenHash, type) {
        const { rows } = await pool.query(
            `SELECT * FROM user_tokens
             WHERE token_hash = $1 AND type = $2 AND used_at IS NULL AND expires_at > NOW()`,
            [tokenHash, type]
        );
        return rows[0] || null;
    },

    async markUsed(id) {
        await pool.query('UPDATE user_tokens SET used_at = CURRENT_TIMESTAMP WHERE id = $1', [id]);
    },
};

module.exports = { RefreshToken, UserToken };
