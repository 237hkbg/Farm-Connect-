const express = require('express');
const { getStats, getActivity } = require('../controllers/dashboardController');
const router = express.Router();

// GET /api/dashboard/stats
router.get('/stats', getStats);

// GET /api/dashboard/activity
router.get('/activity', getActivity);

module.exports = router;
