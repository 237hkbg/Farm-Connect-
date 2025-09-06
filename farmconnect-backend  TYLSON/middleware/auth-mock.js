const jwt = require('jsonwebtoken');

const authMock = async (req, res, next) => {
  try {
    console.log('🔐 [MOCK] Authentication middleware triggered');
    
    // 1. Simulate checking Authorization header
    const authHeader = req.header('Authorization');
    if (!authHeader) {
      console.log('❌ [MOCK] No Authorization header found');
      return res.status(401).json({ 
        error: 'Access denied. No token provided.',
        solution: 'Include: Authorization: Bearer <your_token>'
      });
    }

    // 2. Simulate token extraction
    const token = authHeader.replace('Bearer ', '');
    if (!token) {
      console.log('❌ [MOCK] Invalid Authorization format');
      return res.status(401).json({ 
        error: 'Invalid token format.',
        solution: 'Use: Bearer <your_token>'
      });
    }

    console.log('✅ [MOCK] Token extracted:', token.substring(0, 10) + '...');

    // 3. Simulate token verification
    if (token !== 'mock-token-12345') {
      console.log('❌ [MOCK] Invalid mock token');
      return res.status(401).json({ 
        error: 'Invalid token.',
        solution: 'Use token: mock-token-12345'
      });
    }

    console.log('✅ [MOCK] Token verified successfully');

    // 4. Mock user data (simulates database user)
    const mockUser = {
      id: 1,
      name: 'Test Farmer',
      email: 'farmer@example.com',
      role: 'seller',
      farm_name: 'Green Valley Farms',
      location: 'Nairobi, Kenya'
    };

    // 5. Add mock user to request object
    req.user = mockUser;
    console.log('✅ [MOCK] Authentication successful. User:', mockUser.email);
    
    // 6. Continue to the next middleware/route
    next();

  } catch (error) {
    console.error('🔥 [MOCK] Unexpected auth error:', error);
    res.status(500).json({ 
      error: 'Internal authentication error.',
      solution: 'Contact development team'
    });
  }
};

// Export both as named exports and default export
module.exports = authMock;
module.exports.authMock = authMock;