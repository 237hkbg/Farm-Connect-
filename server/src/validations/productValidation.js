const Joi = require('joi');

const createProductSchema = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().optional(),
  price: Joi.number().positive().required(),
  quantity: Joi.number().integer().min(1).required(),
  seller: Joi.string().required() // MongoDB ObjectId
});

module.exports = { createProductSchema };