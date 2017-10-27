import Joi from 'joi';

// Define and export validation for Review Recipe Request
module.exports = {
  params: {
    recipeId: Joi.number().required()
  },
  body: {
    message: Joi.string().min(5).required()
  }
};
