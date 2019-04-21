// tslint:disable-next-line
require('dotenv').config();
import bodyparser from 'body-parser';
import cors from 'cors';
import express from 'express';
import next from 'next';
import sentry from 'services/sentry';
import translation from 'services/translation';
import handlers from './handlers';

const port = process.env.PORT || 3000;
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

    server.use(cors());
    server.use(bodyparser());
    server.get('*', handlers.Wildcard(app));
    server.get('/sticker-request/:id', handlers.StickerRequest);
    server.post('/api/sticker-requests', handlers.Api.StickerRequests.Add);
    server.get('/api/sticker-requests/:id', handlers.Api.StickerRequests.Get);

    server.listen(port, (e: string) => {
      if (e) {
        throw e;
      }

      translation.init();

      // tslint:disable-next-line
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(e => {
    // tslint:disable-next-line
    console.error(e.stack);

    sentry.captureException(e);

    process.exit(1);
  });
