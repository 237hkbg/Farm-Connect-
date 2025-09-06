const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// Test route - GET
router.get('/test', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT NOW() AS current_time');
    res.json({ 
      message: 'Auth endpoint works! ✅',
      db_time: rows[0].current_time
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Register route - POST
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    
    // Check if user already exists
    const [existingUsers] = await pool.execute(
      'SELECT id FROM users WHERE email = ?', 
      [email]
    );
    
    if (existingUsers.length > 0) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    // Insert new user (for now without password encryption)
    const [result] = await pool.execute(
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [name, email, password, role || 'buyer']
    );
    
    res.json({ 
      message: 'Registration successful! ✅',
      userId: result.insertId
    });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
