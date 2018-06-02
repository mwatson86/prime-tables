
import { expect } from 'chai';

import * as primeNumberUtil from 'utils/prime-number';

describe('prime number util', () => {

  context('hasRemainder has', () => {

    const testCases = [
      {
        name: 'no remainder',
        number: 2
      },
      {
        name: 'remainder',
        number: 3
      }
    ];

    testCases.forEach(({ name, number }) => {

      it(name, () => {

        const multiplier = 2;

        const result = primeNumberUtil.hasRemainder(number, multiplier);

        expect(result).to.be[!!result];

      });

    });

  });

  it('get square root of number, rounded down to whole number if necessary', () => {

    const result = primeNumberUtil.getSqrt(6);

    expect(result).to.equal(2);

  });

  it('get array of prime numbers from whole number', () => {

    const result = primeNumberUtil.getPrimeNumbersFrom(20);

    expect(result).to.eql([2, 3, 5, 7, 11, 13, 17, 19]);

  });

});
