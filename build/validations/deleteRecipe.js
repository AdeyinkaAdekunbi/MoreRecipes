'use strict';

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Define and export validation for Delete Recipe Request
module.exports = {
  params: {
    recipeId: _joi2.default.number().required()
  }
};