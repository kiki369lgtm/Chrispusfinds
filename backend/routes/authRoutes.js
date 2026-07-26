const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');
const { validateRegister, validateLogin } = require('../middleware/validateAuth');

router.post('/register', validateRegister, controller.register);
router.post('/login', validateLogin, controller.login);
router.get('/google', controller.googleAuth);
router.get('/google/callback', controller.googleCallback);
router.post('/refresh', controller.refresh);
router.post('/logout', controller.logout);
router.post('/forgot-password', controller.forgotPassword);
router.post('/reset-password', controller.resetPassword);
router.get('/verify-email', controller.verifyEmail);

module.exports = router;
