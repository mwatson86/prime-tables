
import { expect } from 'chai';
import sinon from 'sinon';

import primeNumberMiddleware from 'middleware/prime-number';

import * as primeNumberUtil from 'utils/prime-number';

describe('prime number middleware', () => {

  const nextStub = sinon.stub();

  const fakeResponse = {
    locals: {}
  };

  afterEach(() => nextStub.reset());

  it('util is called, followed by next if number is defined', () => {

    const fakeNumber = 123;

    const getPrimeNumbersFromStub = sinon.stub(primeNumberUtil, 'getPrimeNumbersFrom');

    const fakeRequest = {
      query: {
        number: fakeNumber
      }
    };

    primeNumberMiddleware(fakeRequest, fakeResponse, nextStub);

    expect(getPrimeNumbersFromStub.withArgs(fakeNumber).calledOnce).to.be.true;
    expect(nextStub.withArgs().calledOnce).to.be.true;

    getPrimeNumbersFromStub.restore();

  });

  it('next is called if number is undefined', () => {

    const fakeRequest = {
      query: {}
    };

    primeNumberMiddleware(fakeRequest, fakeResponse, nextStub);

    expect(nextStub.withArgs().calledOnce).to.be.true;

  });

});
