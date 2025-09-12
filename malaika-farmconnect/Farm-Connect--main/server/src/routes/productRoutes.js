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

// TEMP: Debug route to list all products with IDs
router.get('/debug/all', async (req, res) => {
	try {
		const products = await require('../models/Product').find({});
		res.json(products);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});
router.post('/', authMiddleware, roleMiddleware(FARMER), createProduct);

module.exports = router; // ✅ Export router