
const Price = require('../models/Price');
const { logActivity } = require('../utils/logger');

// GET all prices
exports.getPrices = async (req, res) => {
  try {
    const prices = await Price.find();
    res.json(prices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// CREATE new price entry
exports.createPrice = async (req, res) => {
  try {
    const price = new Price(req.body);
    await price.save();
    // Log activity
    logActivity({ action: `Price tracked: ${price.product} - ${price.price}`, user: price.trackedBy });
    res.status(201).json(price);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};