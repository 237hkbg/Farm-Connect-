const express = require('express');
const auth = require('../middleware/auth-mock'); // Use mock for now
const router = express.Router();

// Create order (protected - buyers only)
router.post('/', auth, (req, res) => {
  // Check if user is a buyer
  if (req.user.role !== 'buyer') {
    return res.status(403).json({ 
      error: 'Access denied. Only buyers can place orders.',
      solution: 'You need a buyer account to purchase products'
    });
  }
  
  const { product_id, quantity, delivery_address, payment_method } = req.body;
  
  // Basic validation
  if (!product_id || !quantity || !delivery_address) {
    return res.status(400).json({ 
      error: 'Product ID, quantity, and delivery address are required' 
    });
  }
  
  if (quantity <= 0) {
    return res.status(400).json({ 
      error: 'Quantity must be greater than 0' 
    });
  }
  
  // Mock order creation - replace with database later
  const mockOrder = {
    order_id: Date.now(), // Temporary order ID
    product_id: parseInt(product_id),
    product_name: 'Organic Tomatoes', // Mock data
    quantity: parseInt(quantity),
    unit_price: 150, // Mock data
    total_price: 150 * parseInt(quantity),
    buyer_id: req.user.id,
    buyer_name: req.user.name,
    delivery_address: delivery_address,
    payment_method: payment_method || 'cash_on_delivery',
    status: 'pending',
    created_at: new Date().toISOString(),
    estimated_delivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() // 3 days from now
  };
  
  res.status(201).json({ 
    message: 'Order placed successfully! ✅',
    order: mockOrder
  });
});

// Get user's orders (protected)
router.get('/my-orders', auth, (req, res) => {
  // Mock orders data - replace with database later
  const mockOrders = [
    {
      order_id: 1001,
      product_name: 'Organic Tomatoes',
      quantity: 5,
      total_price: 750,
      status: 'pending',
      order_date: new Date().toISOString()
    },
    {
      order_id: 1002,
      product_name: 'Fresh Maize',
      quantity: 10,
      total_price: 800,
      status: 'confirmed',
      order_date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString() // 2 days ago
    }
  ];
  
  res.json({
    message: 'Orders retrieved successfully! ✅',
    orders: mockOrders
  });
});

module.exports = router;