const Joi = require('joi');

const createToolSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional(),
  condition: Joi.string().valid('new', 'good', 'fair', 'poor').default('good'),
  sharedBy: Joi.string().required(), // MongoDB ObjectId
  available: Joi.boolean().default(true),
  location: Joi.string().optional(),
  images: Joi.array().items(Joi.string().uri()).optional()
});

module.exports = { createToolSchema };