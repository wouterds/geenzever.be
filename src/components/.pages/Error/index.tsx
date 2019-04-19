import Layout from 'components/Layout';
import Head from 'next/head';
import { Trans, useTranslation } from 'react-i18next';

const Error = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>{t('page.error.title')}</title>
      </Head>

      <h2>{t('page.error.title')}</h2>
      <p>
        <Trans i18nKey="page.error.text" />
      </p>
    </Layout>
  );
};

export default Error;
