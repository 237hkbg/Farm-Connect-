const express = require('express');
const router = express.Router();
const { getPrices, createPrice } = require('../controllers/priceController');

// GET all prices
router.get('/', getPrices);

// CREATE new price entry
router.post('/', createPrice);

module.exports = router;