import Layout from 'components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Container } from './styles';

const SupportLink = ({ children }: { children: ReactNode }) => (
  <span>
    <Link href="/support" prefetch>
      <a>{children}</a>
    </Link>
  </span>
);

const Support = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>{t('page.support.cancel.title')}</title>
      </Head>
      <Container>
        <h2>{t('page.support.cancel.title')}</h2>
        <p>
          {t('page.support.cancel.text-p1')}
          <br />
          <Trans
            i18nKey="page.support.cancel.text-p2"
            components={[<SupportLink>children</SupportLink>]}
          />
        </p>
      </Container>
    </Layout>
  );
};

export default Support;
