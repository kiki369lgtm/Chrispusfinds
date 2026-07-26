const { verifyAccessToken } = require('../utils/jwt');

const authenticateUser = (req, res, next) => {
    const header = req.headers.authorization;
    const token = header && header.startsWith('Bearer ') ? header.slice(7) : null;

    if (!token) {
        return res.status(401).json({ success: false, code: 'TOKEN_MISSING', message: 'Authentication required' });
    }

    try {
        const payload = verifyAccessToken(token);
        req.user = { id: payload.sub, email: payload.email };
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, code: 'TOKEN_EXPIRED', message: 'Access token expired' });
        }
        return res.status(401).json({ success: false, code: 'TOKEN_INVALID', message: 'Invalid access token' });
    }
};

module.exports = authenticateUser;
