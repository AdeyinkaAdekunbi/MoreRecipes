'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res, next) {
  var token = req.body.token;

  _jsonwebtoken2.default.verify(token, 'adekunbi', function (error, data) {
    if (error) {
      return res.json('Unauthenticated');
    }
    console.log(data);
    req.AuthUser = data.user;
    next();
  });
};