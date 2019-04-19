import Layout from 'components/Layout';
import Link from 'next/link';
import { Trans, useTranslation } from 'react-i18next';
import { AnchorButton } from 'styles/button';
import { Img } from './styles';

const Landing = () => {
  const { t } = useTranslation();

  return (
    <Layout>
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
