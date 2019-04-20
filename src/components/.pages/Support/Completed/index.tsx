import Layout from 'components/Layout';
import Head from 'next/head';
import { Trans, useTranslation } from 'react-i18next';
import { Container } from './styles';

const Support = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>{t('page.support.completed.title')}</title>
      </Head>
      <Container>
        <h2>{t('page.support.completed.title')}</h2>
        <p>
          {t('page.support.completed.text-p1')}
          <br />
          <Trans
            i18nKey="page.support.completed.text-p2"
            components={[<a href="mailto:info@geenzever.be">email</a>]}
          />
        </p>
      </Container>
    </Layout>
  );
};

export default Support;
