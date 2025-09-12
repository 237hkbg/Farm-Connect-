
const User = require('../models/User');
const Product = require('../models/Product');
const Rental = require('../models/Rental');
const Price = require('../models/Price');
const Activity = require('../models/Activity');

// GET /api/dashboard/stats
exports.getStats = async (req, res) => {
  try {
    const [totalUsers, productsListed, activeRentals, marketPricesTracked] = await Promise.all([
      User.countDocuments(),
      Product.countDocuments(),
      Rental.countDocuments({ available: true }),
      Price.countDocuments(),
    ]);
    res.json({ totalUsers, productsListed, activeRentals, marketPricesTracked });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// GET /api/dashboard/activity
exports.getActivity = async (req, res) => {
  try {
    let filter = {};
    // If user is not admin, filter by their user id
    if (req.user && req.user.role !== 'admin') {
      filter.user = req.user._id;
    }
    const activity = await Activity.find(filter).sort({ time: -1 }).limit(10).populate('user', 'name email');
    // Format output
    const formatted = activity.map(a => ({
      id: a._id,
      action: a.action,
      time: a.time,
      user: a.user ? (a.user.name || a.user.email) : null,
      meta: a.meta || null,
    }));
    res.json(formatted);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
