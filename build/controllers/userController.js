'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _index = require('../database/models/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = require('../database/models').User;

/**
 *
 */

var userController = function () {
  function userController() {
    _classCallCheck(this, userController);
  }

  _createClass(userController, null, [{
    key: 'signup',

    /**
     * Signs up a user
     * @param {*} req
     * @param {*} res
     * @returns {*} res
     */
    value: function signup(req, res) {
      return _index2.default.User.create({
        fullName: req.body.fullName,
        email: req.body.email,
        password: _bcrypt2.default.hashSync(req.body.password, 10)
      }).then(function (user) {
        return res.status(201).send(user);
      }).catch(function (error) {
        return res.status(400).send(error);
      });
    }

    /**
     * Signs up a user
     * @param {*} req
     * @param {*} res
     * @returns {*} res
     */

  }, {
    key: 'signin',
    value: function signin(req, res) {
      var email = req.body.email;
      var password = req.body.password;

      return _index2.default.User.findOne({ where: { email: email } }).then(function (user) {
        if (!user) {
          return res.status(400).json('User with email not found.');
        }
        if (_bcrypt2.default.compareSync(password, user.password)) {
          _jsonwebtoken2.default.sign({ user: user.get() }, 'adekunbi', function (error, token) {
            if (error) {
              return res.status(400).json('Error signing token');
            }
            return res.json({ token: token });
          });
        } else {
          return res.json({ message: 'Password is wrong' });
        }
      }).catch(function (error) {
        console.log(error);
        return res.status(500).json(error);
      });
    }
  }]);

  return userController;
}();

exports.default = userController;