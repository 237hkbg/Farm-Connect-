const Order = require('../models/Order');
const Product = require('../models/Product');
const { logActivity } = require('../utils/logger');

// GET all orders (admin)
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('product buyer farmer');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET orders for a specific user (farmer or buyer)
exports.getUserOrders = async (req, res) => {
  try {
    const userId = req.user._id;
    const role = req.user.role;
    let filter = {};
    if (role === 'farmer') filter.farmer = userId;
    else if (role === 'buyer') filter.buyer = userId;
    else return res.status(403).json({ message: 'Forbidden' });
    const orders = await Order.find(filter).populate('product buyer farmer');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// CREATE new order (buyer)
exports.createOrder = async (req, res) => {
  try {
    const { product, quantity } = req.body;
    const buyer = req.user._id;
    const prod = await Product.findById(product);
    if (!prod) return res.status(404).json({ message: 'Product not found' });
    const farmer = prod.seller;
    const order = new Order({ product, buyer, farmer, quantity });
    await order.save();
    // Increment seller's earnings
    const totalSale = (prod.price || 0) * (quantity || 1);
    await require('../models/User').findByIdAndUpdate(farmer, { $inc: { earnings: totalSale } });
    // Log activity for buyer and farmer
    logActivity({ action: `Order placed for ${prod.name}`, user: buyer, meta: { order: order._id } });
    logActivity({ action: `Product ${prod.name} ordered`, user: farmer, meta: { order: order._id } });
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE order status (admin/farmer)
exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
