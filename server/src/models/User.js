const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['farmer', 'buyer', 'admin'], default: 'farmer' },
  location: String,
  earnings: { type: Number, default: 0 }, // total sales for farmers
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);