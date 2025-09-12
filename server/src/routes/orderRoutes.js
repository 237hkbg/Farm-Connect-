const express = require('express');
const router = express.Router();
const { getOrders, getUserOrders, createOrder, updateOrderStatus } = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');
const { ADMIN, FARMER, BUYER } = require('../constants/roles');

// Admin: get all orders
router.get('/', authMiddleware, roleMiddleware(ADMIN), getOrders);
// Farmer/Buyer: get their orders
router.get('/my', authMiddleware, getUserOrders);
// Buyer: create order
router.post('/', authMiddleware, roleMiddleware(BUYER), createOrder);
// Admin/Farmer: update order status
router.patch('/:id', authMiddleware, roleMiddleware([ADMIN, FARMER]), updateOrderStatus);

module.exports = router;
