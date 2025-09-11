const Price = require('../models/Price');

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
    res.status(201).json(price);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};