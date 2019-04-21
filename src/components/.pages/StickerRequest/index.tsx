import Layout from 'components/Layout';
import { withRouter } from 'next/router';
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
      <h2>{t('page.sticker-request.title')}</h2>
      <meta key="robots" name="robots" content="noindex" />
    </Layout>
  );
};

export default withRouter(withContainer(StickerRequest));
