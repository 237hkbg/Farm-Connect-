const Rental = require('../models/Rental');

// GET all rentals
exports.getRentals = async (req, res) => {
  try {
    const rentals = await Rental.find().populate('owner', 'name email');
    res.json(rentals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE new rental
exports.createRental = async (req, res) => {
  try {
    const rental = new Rental(req.body);
    await rental.save();
    res.status(201).json(rental);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};