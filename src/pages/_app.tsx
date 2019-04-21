import withGA from 'next-ga';
import NextApp, { Container } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import React from 'react';
import sentry from 'services/sentry';
import translation from 'services/translation';

class App extends NextApp {
  public static async getInitialProps({ Component, ctx }: any): Promise<any> {
    try {
      const { isServer, req, query, pathname } = ctx;

      sentry.configureScope(scope => {
        scope.setExtra('ssr', isServer);
        scope.setExtra('query', query);
        scope.setExtra('pathname', pathname);

        if (req) {
          scope.setExtra('url', req.url);
          scope.setExtra('method', req.method);
          scope.setExtra('headers', req.headers);
          scope.setExtra('params', req.params);
          scope.setExtra('query', req.query);
          scope.setExtra('pathname', req.pathname);

          scope.setUser({
            ip_address:
              req.headers['cf-connecting-ip'] ||
              req.headers['x-forwarded-for'] ||
              req.connection.remoteAddress,
          });
        }
      });

      let pageProps = {};
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps({ ctx });
      }

      return { pageProps, isServer };
    } catch (e) {
      const errorEventId = sentry.captureException(e);

      return {
        hasError: true,
        errorEventId,
      };
    }
  }

  constructor(props: any, context: any) {
    super(props, context);

    translation.init();
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

Router.events.on('routeChangeStart', (_url: string) => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default withGA(process.env.GA_TRACKING_ID, Router)(App);
