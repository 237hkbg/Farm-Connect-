const Activity = require('../models/Activity');

// Log an activity
exports.logActivity = async ({ action, user, meta }) => {
  try {
    await Activity.create({ action, user, meta });
  } catch (err) {
    // Optionally log error, but don't block main flow
    console.error('Activity log error:', err);
  }
};
