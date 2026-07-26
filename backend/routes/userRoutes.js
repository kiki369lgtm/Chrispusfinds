const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const authenticateUser = require('../middleware/authenticateUser');

router.get('/me', authenticateUser, controller.getMe);

module.exports = router;
