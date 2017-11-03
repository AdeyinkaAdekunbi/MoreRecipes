import Joi from 'joi';
// Define and export validation for Add Recipe Request
module.exports = {
  body: {
    name: Joi.string().min(5).required(),
    image: Joi.string().base64().required(),
    ingredients: Joi.string().min(5).required(),
    description: Joi.string().min(10).required(),
    additionalNote: Joi.string()
  }
};
