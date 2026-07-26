const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 10;

// Min 8 chars, at least one uppercase, one lowercase, one digit, one special char
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

const isStrongPassword = (password) => typeof password === 'string' && PASSWORD_REGEX.test(password);

const hashPassword = async (password) => bcrypt.hash(password, SALT_ROUNDS);

const comparePassword = async (password, hash) => bcrypt.compare(password, hash);

module.exports = { isStrongPassword, hashPassword, comparePassword, PASSWORD_REGEX };
