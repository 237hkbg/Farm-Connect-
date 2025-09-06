const express = require('express');
const auth = require('../middleware/auth-mock');
const router = express.Router();

// Test protected route - GET /api/protected/test
router.get('/test', auth, (req, res) => {
  res.json({
    message: 'Protected route accessed successfully! ✅',
    user: req.user,
    timestamp: new Date().toISOString()
  });
});

// Get user profile - GET /api/protected/profile
router.get('/profile', auth, (req, res) => {
  res.json({
    message: 'User profile retrieved successfully! ✅',
    user: {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role
    }
  });
});

// Update user profile - PUT /api/protected/profile (simplified)
router.put('/profile', auth, async (req, res) => {
  try {
    const { name } = req.body;
    
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    // In a real app, you'd update the database here
    // For now, we'll just return a success message
    res.json({ 
      message: 'Profile updated successfully! ✅',
      updatedName: name
    });
    
  } catch (error) {
    res.status(500).json({ error: 'Profile update failed' });
  }
});

module.exports = router;