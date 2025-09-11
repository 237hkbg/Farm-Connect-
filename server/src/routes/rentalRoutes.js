const express = require('express');
const router = express.Router();
const { getRentals, createRental } = require('../controllers/rentalController');

// GET all rentals
router.get('/', getRentals);

// CREATE new rental
router.post('/', createRental);

module.exports = router;