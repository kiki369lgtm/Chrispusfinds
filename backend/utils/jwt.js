const jwt = require('jsonwebtoken');

const ACCESS_TOKEN_TTL = '15m';

const signAccessToken = (user) => {
    return jwt.sign(
        { sub: user.id, email: user.email },
        process.env.JWT_ACCESS_SECRET,
        { expiresIn: ACCESS_TOKEN_TTL }
    );
};

const verifyAccessToken = (token) => {
    return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
};

module.exports = { signAccessToken, verifyAccessToken };
