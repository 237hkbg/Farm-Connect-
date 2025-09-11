const express = require('express');
const router = express.Router();
const { getTools, createTool } = require('../controllers/toolController');

// GET all tools
router.get('/', getTools);

// CREATE new tool
router.post('/', createTool);

module.exports = router;