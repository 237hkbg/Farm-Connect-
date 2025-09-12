const Price = require('../models/Price');

// Fetch latest prices from DB
exports.getLatestPrices = async () => {
  return await Price.find().sort({ date: -1 }).limit(50);
};

// Add or update a price entry
exports.updatePrice = async (product, unit, price, market, source) => {
  const newPrice = new Price({ product, unit, price, market, source });
  return await newPrice.save();
};

// Later: integrate with external APIs for real-time data