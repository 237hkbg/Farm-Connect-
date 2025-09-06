const jwt = require('jsonwebtoken');
const pool = require('../config/database');

const auth = async (req, res, next) => {
  try {
    console.log('🔐 Authentication middleware triggered');
    
    // 1. Get token from header
    const authHeader = req.header('Authorization');
    if (!authHeader) {
      console.log('❌ No Authorization header found');
      return res.status(401).json({ 
        error: 'Access denied. No token provided.',
        solution: 'Include: Authorization: Bearer <your_token>'
      });
    }

    // 2. Extract token from "Bearer <token>"
    const token = authHeader.replace('Bearer ', '');
    if (!token) {
      console.log('❌ Invalid Authorization format');
      return res.status(401).json({ 
        error: 'Invalid token format.',
        solution: 'Use: Bearer <your_token>'
      });
    }

    console.log('✅ Token extracted:', token.substring(0, 20) + '...');

    // 3. Verify JWT token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log('✅ Token verified. User ID:', decoded.userId);
    } catch (jwtError) {
      console.log('❌ JWT verification failed:', jwtError.message);
      return res.status(401).json({ 
        error: 'Invalid or expired token.',
        solution: 'Login again to get a new token'
      });
    }

    // 4. Check if user still exists in database
    let users;
    try {
      [users] = await pool.execute(
        'SELECT id, name, email, role FROM users WHERE id = ?',
        [decoded.userId]
      );
    } catch (dbError) {
      console.log('❌ Database error during auth:', dbError.message);
      return res.status(500).json({ 
        error: 'Authentication service unavailable.',
        solution: 'Try again later'
      });
    }

    if (users.length === 0) {
      console.log('❌ User not found in database for ID:', decoded.userId);
      return res.status(401).json({ 
        error: 'User account no longer exists.',
        solution: 'Contact support'
      });
    }

    // 5. Add user information to request object
    req.user = users[0];
    console.log('✅ Authentication successful. User:', req.user.email);
    
    // 6. Continue to the next middleware/route
    next();

  } catch (error) {
    console.error('🔥 Unexpected auth error:', error);
    res.status(500).json({ 
      error: 'Internal authentication error.',
      solution: 'Contact development team'
    });
  }
};

module.exports = auth;