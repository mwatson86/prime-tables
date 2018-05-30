
import { expect } from 'chai';
import request from 'supertest';

import startup from 'server';

describe('startup', () => {

  let server;

  beforeEach(() => {
    server = startup();
  });

  afterEach(done => {
    server.close(done);
  });

  it('root', done => {
    request(server)
      .get('/')
      .expect(200, done);
  });

});
