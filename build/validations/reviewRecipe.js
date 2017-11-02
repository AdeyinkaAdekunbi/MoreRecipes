'use strict';

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Define and export validation for Review Recipe Request
module.exports = {
  params: {
    recipeId: _joi2.default.number().required()
  },
  body: {
    message: _joi2.default.string().min(5).required()
  }
};