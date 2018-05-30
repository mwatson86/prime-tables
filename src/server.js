
import express from 'express';

const PORT = 3000;

const startup = () => {

  const app = express();

  app.set('view engine', 'pug');

  app.get('/', (req, res) => {
    res.render('index', {
      title: 'title',
      message: 'message'
    })
  });

  const server = app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });

  return server;

};

export default startup;
