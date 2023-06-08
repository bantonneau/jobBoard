// routes/authRoutes.js
const express = require('express');
const authController = require('../controllers/authControllers');

const router = express.Router();

// Authentication routes
router.post('/login', authController.login);
router.get('/logout', authController.logout);

module.exports = router;
