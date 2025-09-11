const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  condition: { type: String, enum: ['new', 'good', 'fair', 'poor'], default: 'good' },
  sharedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  available: { type: Boolean, default: true },
  location: String,
  images: [String]
}, { timestamps: true });

module.exports = mongoose.model('Tool', toolSchema);