const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Equipment name
  description: String,
  pricePerDay: { type: Number, required: true },
  available: { type: Boolean, default: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  location: String,
  images: [String] // URLs or file paths
}, { timestamps: true });

module.exports = mongoose.model('Rental', rentalSchema);