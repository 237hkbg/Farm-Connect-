const express = require('express');
const auth = require('../middleware/auth-mock');
const router = express.Router();

// In-memory storage for reviews (replace with database later)
let mockReviews = [
  {
    id: 1,
    product_id: 1,
    user_id: 1,
    user_name: 'Test Buyer',
    rating: 5,
    comment: 'Excellent tomatoes! Very fresh and organic.',
    created_at: '2025-09-01T10:30:00.000Z'
  },
  // ... (all the other code)
];

// GET /api/reviews/product/:productId
router.get('/product/:productId', (req, res) => {
  // ... (code continues)
});

// ... (all the other routes)

module.exports = router;