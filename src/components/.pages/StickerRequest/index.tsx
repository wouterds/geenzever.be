import Layout from 'components/Layout';
import { useTranslation } from 'react-i18next';

const StickerRequest = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <h2>{t('page.sticker-request.title')}</h2>
      <meta key="robots" name="robots" content="noindex" />
    </Layout>
  );
};

export default StickerRequest;
