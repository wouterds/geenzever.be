import Layout from 'components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { Trans, useTranslation } from 'react-i18next';
import { AnchorButton } from 'styles/button';
import { Img } from './styles';

const Landing = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Head>
        <meta key="og:title" property="og:title" content={t('seo.title')} />
        <meta
          key="og:description"
          property="og:description"
          content={t('seo.description')}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={t('seo.title')}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={t('seo.description')}
        />
      </Head>
      <h2>{t('page.landing.title')}</h2>
      <p>
        <Trans
          i18nKey="page.landing.text"
          components={[<strong>text</strong>]}
        />
      </p>

      <Img src="/static/mock--yellow.jpg" />

      <p>
        <Link href="/get-stickers" prefetch passHref>
          <AnchorButton>
            <Trans
              i18nKey="cta.request-sticker"
              components={[<strong>text</strong>]}
            />
          </AnchorButton>
        </Link>
      </p>
    </Layout>
  );
};

export default Landing;
