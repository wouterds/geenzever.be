import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Link href="/get-stickers" prefetch>
        <a>{t('nav.stickers')}</a>
      </Link>
      <Link href="/support" prefetch>
        <a>{t('nav.support')}</a>
      </Link>
    </Container>
  );
};

export default Navigation;
