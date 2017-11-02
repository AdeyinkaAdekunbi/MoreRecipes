'use strict';

var _newReview = require('../models/newReview');

var _newReview2 = _interopRequireDefault(_newReview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  createReview: function createReview(req, res) {
    // Return Dummy Data with HTTP CREATED
    res.status(201).send((0, _newReview2.default)());
  }
};