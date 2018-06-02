'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _primeNumber = require('utils/prime-number');

exports.default = function (req, res, next) {
  var number = req.query.number;


  if (number) {
    res.locals.primeNumbers = (0, _primeNumber.getPrimeNumbersFrom)(number);
  }

  return next();
};