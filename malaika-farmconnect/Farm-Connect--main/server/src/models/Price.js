const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
  product: { type: String, required: true }, // e.g., "Maize", "Tomatoes"
  unit: { type: String, default: 'kg' },     // kg, ton, bag, etc.
  price: { type: Number, required: true },   // Price per unit
  market: { type: String },                  // Market location name
  source: { type: String },                  // API or manual entry
  date: { type: Date, default: Date.now }    // Timestamp of price data
}, { timestamps: true });

module.exports = mongoose.model('Price', priceSchema);