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
    <Container className={`dropdown ${isOpen && 'is-open'}`}>
      <a
        href="#"
        className="dropdown-toggle"
        onClick={(e: any) => {
          e.preventDefault();

          setIsOpen(!isOpen);
        }}
      >
        <i className="icon icon-menu" />
      </a>
      <ul className="menu">
        <li className="menu-item">
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
        <li className="menu-item">
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
        <li className="menu-item">
          <Link href="/faq" prefetch>
            <a className={pathname.indexOf('/faq') > -1 ? 'active' : undefined}>
              {t('nav.faq')}
            </a>
          </Link>
        </li>
        <li className="menu-item">
          <a rel="nofollow" href="mailto:info@geenzever.be">
            {t('nav.contact')}
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default withRouter(Navigation);
