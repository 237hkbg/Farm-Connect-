const Joi = require('joi');

const registerUserSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid('farmer', 'buyer', 'admin').default('farmer'),
  location: Joi.string().optional()
});

const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

module.exports = { registerUserSchema, loginUserSchema };