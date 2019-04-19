// tslint:disable-next-line
require('dotenv').config();
import * as express from 'express';
import * as next from 'next';
import handlers from './handlers';

const port = 3000;
const config: { [key: string]: string | boolean } = {};

if (process.env.NODE_ENV !== 'production') {
  config.dev = true;
  config.dir = './src';
}

const app = next(config);

app
  .prepare()
  .then(() => {
    const server = express();

    server.use('/static', express.static('/static'));
    server.get('*', handlers.Wildcard(app));

    server.listen(port, (e: string) => {
      if (e) {
        throw e;
      }

      // tslint:disable-next-line
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(e => {
    // tslint:disable-next-line
    console.error(e.stack);

    process.exit(1);
  });
