'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressValidation = require('express-validation');

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _models = require('./database/models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Set up the express app
var app = (0, _express2.default)();

// Log requests to the console.
app.use((0, _morgan2.default)('dev'));
_dotenv2.default.config();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// Pass app context to our routes for route mapping
(0, _routes2.default)(app);

// Ensure validation errors are returned as JSON object
app.use(function (err, req, res, next) {
  // eslint sees unused variable as error
  console.info(next);
  if (err instanceof _expressValidation2.default.ValidationError) {
    return res.status(err.status).json(err);
  }
  res.status(500);
});

_models2.default.sequelize.sync().then(function () {
  var port = process.env.PORT || 5678;
  app.listen(port, function () {
    console.log('Listening on port ', port);
  });
});

exports.default = app;