'use strict';

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Define Validations for Ingredient
var ingredient = _joi2.default.object().keys({
  name: _joi2.default.string().min(5)
});

// Define Validations for Direction
var direction = _joi2.default.object().keys({
  name: _joi2.default.string().min(5)
});

// Define and export validation for Update Recipe Request
module.exports = {
  params: {
    recipeId: _joi2.default.number().required()
  },
  body: {
    name: _joi2.default.string().min(5).required(),
    image: _joi2.default.string().base64().required(),
    ingredients: _joi2.default.array().items(ingredient).required(),
    directions: _joi2.default.array().items(direction).required(),
    additionalNotes: _joi2.default.string()
  }
};