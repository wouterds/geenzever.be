import Layout from 'components/Layout';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { Container, PayPalButtonAndQRCode } from './styles';

const SupportUs = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>
          {t('page.support-us.title')} - {t('website.title')}
        </title>
      </Head>
      <Container>
        <h2>{t('page.support-us.title')}</h2>
        <p>
          {t('page.support-us.text-p1')}
          <br />
          {t('page.support-us.text-p2')}
        </p>

        <br />

        <PayPalButtonAndQRCode>
          <a
            rel="nofollow"
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2SCMRY9L4M43E&source=url"
          >
            <img src="/static/paypal-donate-button.png" width="200px" />
          </a>

          <img src="/static/qrcode.svg" />
        </PayPalButtonAndQRCode>
      </Container>
    </Layout>
  );
};

export default SupportUs;
