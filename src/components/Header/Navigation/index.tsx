import Link from 'next/link';
import { SingletonRouter, withRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';

interface Props {
  router: SingletonRouter;
}

const Navigation = (props: Props) => {
  const { t } = useTranslation();
  const { pathname } = props.router;

  return (
    <Container>
      <button>
        <img
          src={require('@resources/images/menu.svg')}
        />
      </button>
      <ul>
        <li>
          <Link href="/get-stickers" prefetch>
            <a
              className={
                pathname.indexOf('/get-stickers') > -1 ? 'active' : undefined
              }
            >
              {t('nav.stickers')}
            </a>
          </Link>
        </li>
        <li>
          <Link href="/support" prefetch>
            <a className={pathname.indexOf('/support') > -1 ? 'active' : undefined}>
              {t('nav.support')}
            </a>
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default withRouter(Navigation);
