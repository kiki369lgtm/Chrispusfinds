const { PASSWORD_REGEX } = require('../utils/password');

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9\s-]{7,20}$/;

const validateRegister = (req, res, next) => {
    const { firstName, lastName, email, phoneNumber, password, confirmPassword } = req.body;
    const errors = [];

    if (!firstName || typeof firstName !== 'string' || firstName.trim().length < 2) {
        errors.push('First name is required and must be at least 2 characters');
    }
    if (!lastName || typeof lastName !== 'string' || lastName.trim().length < 2) {
        errors.push('Last name is required and must be at least 2 characters');
    }
    if (!email || !EMAIL_REGEX.test(email)) {
        errors.push('A valid email address is required');
    }
    if (!phoneNumber || !PHONE_REGEX.test(phoneNumber)) {
        errors.push('A valid phone number is required');
    }
    if (!password || !PASSWORD_REGEX.test(password)) {
        errors.push('Password must be at least 8 characters and include uppercase, lowercase, a number, and a special character');
    }
    if (password !== confirmPassword) {
        errors.push('Passwords do not match');
    }

    if (errors.length > 0) {
        return res.status(400).json({ success: false, errors });
    }
    next();
};

const validateLogin = (req, res, next) => {
    const { identifier, password } = req.body;
    const errors = [];

    if (!identifier || typeof identifier !== 'string') {
        errors.push('Email or phone number is required');
    }
    if (!password || typeof password !== 'string') {
        errors.push('Password is required');
    }

    if (errors.length > 0) {
        return res.status(400).json({ success: false, errors });
    }
    next();
};

module.exports = { validateRegister, validateLogin, EMAIL_REGEX, PHONE_REGEX };
