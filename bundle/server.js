'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _primeNumber = require('middleware/prime-number');

var _primeNumber2 = _interopRequireDefault(_primeNumber);

var _render = require('middleware/render');

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = 3000;

var startup = function startup() {

  var app = (0, _express2.default)();

  app.set('view engine', 'pug');

  app.get('/', _primeNumber2.default, _render2.default);

  var server = app.listen(PORT, function () {
    console.log('listening on port ' + PORT);
  });

  return server;
};

exports.default = startup;