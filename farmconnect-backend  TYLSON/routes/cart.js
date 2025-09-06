const express = require('express');
const auth = require('../middleware/auth-mock');
const router = express.Router();

// In-memory cart storage (replace with database later)
let mockCarts = {};

// Get user's cart
router.get('/', auth, (req, res) => {
  const userId = req.user.id;
  const userCart = mockCarts[userId] || { items: [], total: 0 };
  
  res.json({
    message: 'Cart retrieved successfully! ✅',
    cart: userCart
  });
});

// Add item to cart
router.post('/add', auth, (req, res) => {
  const userId = req.user.id;
  const { product_id, quantity } = req.body;
  
  if (!product_id || !quantity || quantity <= 0) {
    return res.status(400).json({ error: 'Valid product ID and quantity required' });
  }
  
  // Initialize cart if doesn't exist
  if (!mockCarts[userId]) {
    mockCarts[userId] = { items: [], total: 0 };
  }
  
  // Mock product data - replace with database lookup later
  const mockProduct = {
    id: product_id,
    name: 'Product ' + product_id,
    price: 100 * product_id,
    unit: 'kg'
  };
  
  // Check if product already in cart
  const existingItemIndex = mockCarts[userId].items.findIndex(item => item.product_id == product_id);
  
  if (existingItemIndex >= 0) {
    // Update quantity
    mockCarts[userId].items[existingItemIndex].quantity += quantity;
  } else {
    // Add new item
    mockCarts[userId].items.push({
      product_id,
      name: mockProduct.name,
      price: mockProduct.price,
      quantity,
      unit: mockProduct.unit,
      subtotal: mockProduct.price * quantity
    });
  }
  
  // Update cart total
  mockCarts[userId].total = mockCarts[userId].items.reduce((sum, item) => sum + item.subtotal, 0);
  
  res.json({
    message: 'Item added to cart! ✅',
    cart: mockCarts[userId]
  });
});

// Remove item from cart
router.post('/remove', auth, (req, res) => {
  const userId = req.user.id;
  const { product_id } = req.body;
  
  if (!mockCarts[userId]) {
    return res.status(404).json({ error: 'Cart is empty' });
  }
  
  mockCarts[userId].items = mockCarts[userId].items.filter(item => item.product_id != product_id);
  mockCarts[userId].total = mockCarts[userId].items.reduce((sum, item) => sum + item.subtotal, 0);
  
  res.json({
    message: 'Item removed from cart! ✅',
    cart: mockCarts[userId]
  });
});

// Clear cart
router.delete('/clear', auth, (req, res) => {
  const userId = req.user.id;
  mockCarts[userId] = { items: [], total: 0 };
  
  res.json({ message: 'Cart cleared successfully! ✅' });
});

module.exports = router;