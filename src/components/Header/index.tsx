import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Navigation from './Navigation';
import { Container, LogoWrapper, NavigationWrapper } from './styles';

const Header = () => {
  const { t } = useTranslation();

  return (
    <Container className="container">
      <div className="columns">
        <LogoWrapper className="column col-6 col-sm-8 col-xs-10">
          <Link prefetch href="/">
            <a>
              <h1>{t('website.title')}</h1>
            </a>
          </Link>
        </LogoWrapper>
        <NavigationWrapper className="column col-6 col-sm-4 col-xs-2">
          <Navigation />
        </NavigationWrapper>
      </div>
    </Container>
  );
};

export default Header;
