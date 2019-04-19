import NextApp, { Container } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import React from 'react';
import translation from 'services/translation';

class App extends NextApp {
  public static async getInitialProps({ Component, ctx }: any): Promise<any> {
    const { isServer } = ctx;

    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps, isServer };
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

export default App;
