import Notice from 'components/Notice';
import Head from 'next/head';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles';
import 'styles/base.css';
import Footer from '../Footer';
import Header from '../Header';
import { Container, Main } from './styles';

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { t } = useTranslation();
  const { children } = props;

  const seoImage = `${process.env.BASE_URL}/static/mock--yellow.jpg`;

  return (
    <>
      <Head>
        <title>{t('website.title')}</title>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta key="robots" name="robots" content="index, follow" />
        <meta property="og:site_name" content={t('seo.site-name')} />
        <meta property="og:title" content={t('seo.title')} />
        <meta property="og:description" content={t('seo.description')} />
        <meta property="og:image" content={seoImage} />
        <meta name="twitter:title" content={t('seo.title')} />
        <meta name="twitter:description" content={t('seo.description')} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={seoImage} />
      </Head>

      <ThemeProvider theme={theme}>
        <Container>
          {/* <Notice /> */}

          <Header />

          <Main className="container" role="main">
            {children}
          </Main>

          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Layout;
