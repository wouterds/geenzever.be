import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.MODE,
  release: process.env.VERSION,
});

export default Sentry;
