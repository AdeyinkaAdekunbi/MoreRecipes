import Joi from 'joi';

// Define and export validation for Delete Recipe Request
module.exports = {
  params: {
    recipeId: Joi.number().required()
  }
};
