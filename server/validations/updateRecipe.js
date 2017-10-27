import Joi from 'joi';

// Define Validations for Ingredient
const ingredient = Joi.object().keys({
  name: Joi.string().min(5)
});

// Define Validations for Direction
const direction = Joi.object().keys({
  name: Joi.string().min(5)
});

// Define and export validation for Update Recipe Request
module.exports = {
  params: {
    recipeId: Joi.number().required()
  },
  body: {
    name: Joi.string().min(5).required(),
    image: Joi.string().base64().required(),
    ingredients: Joi.array().items(ingredient).required(),
    directions: Joi.array().items(direction).required(),
    additionalNotes: Joi.string()
  }
};
