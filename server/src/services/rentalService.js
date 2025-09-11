const Rental = require('../models/Rental');

// Get available rentals
exports.getAvailableRentals = async () => {
  return await Rental.find({ available: true }).populate('owner', 'name email');
};

// Mark rental as unavailable
exports.markAsRented = async (rentalId) => {
  return await Rental.findByIdAndUpdate(rentalId, { available: false }, { new: true });
};