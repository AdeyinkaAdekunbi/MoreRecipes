import Joi from 'joi';

// Define and export validation for Sign In Request
module.exports = {
  body: {
    fullName: Joi.string().min(5).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required()
  }
};
