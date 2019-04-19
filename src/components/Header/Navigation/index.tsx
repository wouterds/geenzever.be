import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Link href="/get-stickers">
        <a>{t('nav.stickers')}</a>
      </Link>
    </Container>
  );
};

export default Navigation;
