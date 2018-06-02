'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (req, res) {
  var primeNumbers = res.locals.primeNumbers;
  var number = req.query.number;


  res.render('index', {
    title: 'Prime Tables',
    number: number || '',
    primeNumbers: primeNumbers || []
  });
};