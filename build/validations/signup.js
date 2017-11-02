'use strict';

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Define and export validation for Sign In Request
module.exports = {
  body: {
    fullName: _joi2.default.string().min(5).required(),
    email: _joi2.default.string().email().required(),
    password: _joi2.default.string().min(5).required()
  }
};