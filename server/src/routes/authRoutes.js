// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();

// Import auth controller functions
const { register, login, getProfile } = require('../controllers/authController');

// Import middleware
const authMiddleware = require('../middlewares/authMiddleware');

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', register);

// @route   POST /api/auth/login
// @desc    Login and get JWT token
// @access  Public
router.post('/login', login);

// @route   GET /api/auth/profile
// @desc    Get logged-in user's profile
// @access  Private
router.get('/profile', authMiddleware, getProfile);

module.exports = router;