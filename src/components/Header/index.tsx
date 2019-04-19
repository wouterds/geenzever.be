import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Row } from 'styled-bootstrap-grid';
import Navigation from './Navigation';
import { Container, LogoWrapper, NavigationWrapper } from './styles';

const Header = () => {
  const { t } = useTranslation();

  return (
    <Container fluid as="header">
      <Row>
        <LogoWrapper sm={8}>
          <Link prefetch href="/">
            <a>
              <h1>{t('website.title')}</h1>
            </a>
          </Link>
        </LogoWrapper>
        <NavigationWrapper sm={4}>
          <Navigation />
        </NavigationWrapper>
      </Row>
    </Container>
  );
};

export default Header;
