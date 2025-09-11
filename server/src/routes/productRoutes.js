const express = require('express');
const router = express.Router();

// ✅ Import controllers BEFORE using them
const { getProducts, createProduct } = require('../controllers/productController');

// Middlewares
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');
const { FARMER } = require('../constants/roles');

// Routes
router.get('/', getProducts);
router.post('/', authMiddleware, roleMiddleware(FARMER), createProduct);

module.exports = router; // ✅ Export router