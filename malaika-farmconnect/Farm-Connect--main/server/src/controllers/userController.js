
const User = require('../models/User');
const { logActivity } = require('../utils/logger');

// GET all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password'); // hide password
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// CREATE new user
exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    // Log activity
    logActivity({ action: `New user registered: ${user.name || user.email}`, user: user._id });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};