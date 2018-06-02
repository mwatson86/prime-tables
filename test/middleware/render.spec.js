
import { expect } from 'chai';
import sinon from 'sinon';

import renderMiddleware from 'middleware/render';

describe('render middleware', () => {

  it('calls render with correct args', () => {

    const renderStub = sinon.stub();

    const fakeNumber = 123,
      fakePrimeNumbers = [2, 3];

    const fakeRequest = {
      query: {
        number: fakeNumber
      }
    };

    const fakeResponse = {
      render: renderStub,
      locals: {
        primeNumbers: fakePrimeNumbers
      }
    };

    renderMiddleware(fakeRequest, fakeResponse)

    expect(renderStub.withArgs('index', {
      title: 'Prime Tables',
      number: fakeNumber,
      primeNumbers: fakePrimeNumbers
    }).calledOnce).to.be.true;

  });

});
