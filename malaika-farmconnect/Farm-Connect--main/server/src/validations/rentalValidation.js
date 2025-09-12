const Joi = require('joi');

const createRentalSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional(),
  pricePerDay: Joi.number().positive().required(),
  available: Joi.boolean().default(true),
  owner: Joi.string().required(), // MongoDB ObjectId
  location: Joi.string().optional(),
  images: Joi.array().items(Joi.string().uri()).optional()
});

module.exports = { createRentalSchema };