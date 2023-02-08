const Joi = require('joi')

const updateSubsSchema = Joi.object({
  subscription: Joi.string().valid('starter', 'pro', 'business').required(),
})

module.exports = updateSubsSchema