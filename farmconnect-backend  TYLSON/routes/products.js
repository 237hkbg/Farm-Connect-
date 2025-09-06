const express = require('express');
const auth = require('../middleware/auth-mock'); // Use mock for now
const router = express.Router();

// Get all products (public - no auth required)
router.get('/', (req, res) => {
  // Mock products data - replace with database later
  const mockProducts = [
    {
      id: 1,
      name: 'Organic Tomatoes',
      price: 150,
      category: 'vegetables',
      farmer_name: 'Green Valley Farms',
      farmer_id: 1,
      quantity: 50,
      unit: 'kg'
    },
    {
      id: 2,
      name: 'Fresh Maize', 
      price: 80,
      category: 'grains',
      farmer_name: 'Sunshine Farms',
      farmer_id: 2,
      quantity: 200,
      unit: 'kg'
    },
    {
      id: 3,
      name: 'Avocados',
      price: 200,
      category: 'fruits',
      farmer_name: 'Test Farmer',
      farmer_id: 1,
      quantity: 30,
      unit: 'pieces'
    }
  ];
  
  res.json({ 
    message: 'Products retrieved successfully! ✅',
    products: mockProducts 
  });
});

// Create product (protected - farmers only)
router.post('/', auth, (req, res) => {
  // Check if user is a farmer/seller
  if (req.user.role !== 'seller') {
    return res.status(403).json({ 
      error: 'Access denied. Only farmers can create products.',
      solution: 'You need a seller account to list products'
    });
  }
  
  const { name, price, category, quantity, unit } = req.body;
  
  // Basic validation
  if (!name || !price || !category) {
    return res.status(400).json({ 
      error: 'Name, price, and category are required' 
    });
  }
  
  // Mock product creation - replace with database later
  const newProduct = {
    id: Date.now(), // Temporary ID
    name,
    price: parseFloat(price),
    category,
    quantity: quantity || 0,
    unit: unit || 'kg',
    farmer_id: req.user.id,
    farmer_name: req.user.name,
    created_at: new Date().toISOString()
  };
  
  res.status(201).json({ 
    message: 'Product created successfully! ✅',
    product: newProduct
  });
});

// Get single product (public)
router.get('/:id', (req, res) => {
  const productId = req.params.id;
  
  // Mock data - replace with database later
  const mockProduct = {
    id: productId,
    name: 'Organic Tomatoes',
    price: 150,
    description: 'Fresh organic tomatoes from our farm',
    category: 'vegetables',
    farmer_name: 'Green Valley Farms',
    farmer_id: 1,
    quantity: 50,
    unit: 'kg',
    image_url: null
  };
  
  res.json({
    message: 'Product retrieved successfully! ✅',
    product: mockProduct
  });
});

module.exports = router;