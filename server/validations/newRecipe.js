import Joi from 'joi';

// Define Validations for Ingredient
const ingredient = Joi.object().keys({
  name: Joi.string().min(5)
});

// Define Validations for Direction
const direction = Joi.object().keys({
  name: Joi.string().min(5)
});

// Define and export validation for Add Recipe Request
module.exports = {
  body: {
    name: Joi.string().min(5).required(),
    image: Joi.string().base64().required(),
    ingredients: Joi.array().items(ingredient).required(),
    directions: Joi.array().items(direction).required(),
    additionalNotes: Joi.string()
  }
};
