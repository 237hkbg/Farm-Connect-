const Tool = require('../models/Tool');

// GET all tools
exports.getTools = async (req, res) => {
  try {
    const tools = await Tool.find().populate('sharedBy', 'name email');
    res.json(tools);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE new tool
exports.createTool = async (req, res) => {
  try {
    const tool = new Tool(req.body);
    await tool.save();
    res.status(201).json(tool);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};