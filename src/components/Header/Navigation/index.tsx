import Link from 'next/link';
import { SingletonRouter, withRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';

interface Props {
  router: SingletonRouter;
}

const Navigation = (props: Props) => {
  const { t } = useTranslation();
  const { pathname } = props.router;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <button onClick={() => setIsOpen(!isOpen)}>
        <img src={require('@resources/images/menu.svg')} />
      </button>
      <ul className={isOpen ? 'open' : undefined}>
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
            <a
              className={
                pathname.indexOf('/support') > -1 ? 'active' : undefined
              }
            >
              {t('nav.support')}
            </a>
          </Link>
        </li>
        <li>
          <Link href="/faq" prefetch>
            <a className={pathname.indexOf('/faq') > -1 ? 'active' : undefined}>
              {t('nav.faq')}
            </a>
          </Link>
        </li>
        <li>
          <a rel="nofollow" href="mailto:info@geenzever.be">
            {t('nav.contact')}
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default withRouter(Navigation);
