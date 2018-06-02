"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasRemainder = exports.hasRemainder = function hasRemainder(number, multiplier) {
  return number % multiplier !== 0;
};

var getSqrt = exports.getSqrt = function getSqrt(number) {
  return Math.floor(Math.sqrt(number));
};

var getPrimeNumbersFrom = exports.getPrimeNumbersFrom = function getPrimeNumbersFrom(number) {
  var sieve = [];

  out: for (var i = 2; i <= number; i++) {
    var sqrt = getSqrt(i);

    for (var j = 2; j <= sqrt; j++) {
      if (!hasRemainder(i, j)) {
        continue out;
      }
    }

    sieve.push(i);
  }

  return sieve;
};