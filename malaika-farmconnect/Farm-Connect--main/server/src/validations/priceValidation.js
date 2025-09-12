const Joi = require('joi');

const createPriceSchema = Joi.object({
  product: Joi.string().required(),
  unit: Joi.string().valid('kg', 'ton', 'bag', 'litre').default('kg'),
  price: Joi.number().positive().required(),
  market: Joi.string().optional(),
  source: Joi.string().optional(),
  date: Joi.date().default(Date.now)
});

module.exports = { createPriceSchema };