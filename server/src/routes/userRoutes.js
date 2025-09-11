// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();

// Import controller functions
const { getUsers, createUser } = require('../controllers/userController');

// Import middlewares
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// Import constants
const { ADMIN } = require('../constants/roles');

// @route   GET /api/users
// @desc    Get all users
// @access  Public (adjust if needed)
router.get('/', getUsers);

// @route   POST /api/users
// @desc    Create a new user
// @access  Admin only
router.post('/', authMiddleware, roleMiddleware(ADMIN), createUser);

module.exports = router;

//Test
console.log({
  getUsers,
  createUser,
  authMiddleware: typeof authMiddleware,
  roleMiddleware: typeof roleMiddleware,
  ADMIN
});