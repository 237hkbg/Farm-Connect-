const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  action: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  time: { type: Date, default: Date.now },
  meta: { type: Object }, // optional extra info
});

module.exports = mongoose.model('Activity', activitySchema);
