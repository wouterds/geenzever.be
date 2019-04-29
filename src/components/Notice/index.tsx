// import { useEffect, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Container } from './styles';
import Link from 'next/link';

const SupportLink = ({ children }: { children: ReactNode }) => (
  <span>
    <Link href="/support" prefetch>
      <a>{children}</a>
    </Link>
  </span>
);

export default () => {
  const { t } = useTranslation();
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   setIsVisible(true);
  // }, [true]);

  // if (!isVisible) {
  //   return null;
  // }

  return (
    <Container>
      <i className="icon icon-message" />
      <Trans i18nKey="feedback.notice" components={[<SupportLink>text</SupportLink>]} />
    </Container>
  );
};
