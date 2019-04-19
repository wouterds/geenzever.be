import Head from 'next/head';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import 'semantic-ui-css/semantic.min.css';
import { BaseCSS } from 'styled-bootstrap-grid';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles';
import 'styles/base.css';
import 'styles/fonts.css';
import Footer from '../Footer';
import Header from '../Header';
import { Container, Main } from './styles';

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { t } = useTranslation();
  const { children } = props;

  return (
    <>
      <Head>
        <title>{t('website.title')}</title>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta name="robots" content="index, follow" />
        <meta
          key="og:site_name"
          property="og:site_name"
          content={t('seo.site-name')}
        />
        <meta
          key="og:image"
          property="og:image"
          content={`${process.env.BASE_URL}/static/images/mock--yellow.jpg`}
        />
        <meta
          key="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={`${process.env.BASE_URL}/static/images/mock--yellow.jpg`}
        />
      </Head>

      <BaseCSS />

      <ThemeProvider theme={theme}>
        <Container>
          <Header />

          <Main fluid role="main" as="section">
            {children}
          </Main>

          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Layout;
