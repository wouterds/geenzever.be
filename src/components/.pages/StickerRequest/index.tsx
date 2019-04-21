import Layout from 'components/Layout';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import Error from '../Error';
import withContainer from './container';

interface Props {
  stickerRequest: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    street: string;
    bus: string;
    postalCode: string;
    city: string;
    note: string;
  } | null;
}

const StickerRequest = (props: Props) => {
  const { t } = useTranslation();
  const { stickerRequest } = props;

  if (!stickerRequest) {
    return <Error />;
  }

  return (
    <Layout>
      <Head>
        <meta key="robots" name="robots" content="noindex" />
      </Head>

      <h2>{t('page.sticker-request.title')}</h2>
    </Layout>
  );
};

export default withContainer(StickerRequest);
