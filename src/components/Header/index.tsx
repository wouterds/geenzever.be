import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Row } from 'styled-bootstrap-grid';
import { Container, LogoWrapper } from './styles';

const Header = () => {
  const { t } = useTranslation();

  return (
    <Container fluid as="header">
      <Row>
        <LogoWrapper col={12}>
          <Link prefetch href="/">
            <a>
              <h1>{t('website.title')}</h1>
            </a>
          </Link>
        </LogoWrapper>
      </Row>
    </Container>
  );
};

export default Header;
