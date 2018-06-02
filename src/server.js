
import express from 'express';

import primeNumberMiddleware from 'middleware/prime-number';
import renderMiddleware from 'middleware/render';

const PORT = 3000;

const startup = () => {

  const app = express();

  app.set('view engine', 'pug');

  app.get('/', primeNumberMiddleware, renderMiddleware);

  const server = app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });

  return server;

};

export default startup;
