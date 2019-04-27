import { getYear } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Container className="container">
      {t('website.copyright', { year: getYear(new Date()) })}
    </Container>
  );
};

export default Footer;
