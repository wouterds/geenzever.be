import Link from 'next/link';
import { ReactNode } from 'react';
import { Trans } from 'react-i18next';
import { Container } from './styles';

const SupportLink = ({ children }: { children: ReactNode }) => (
  <span>
    <Link href="/support" prefetch>
      <a>{children}</a>
    </Link>
  </span>
);

export default () => (
  <Container>
    <i className="icon icon-message" />
    <Trans
      i18nKey="feedback.notice"
      components={[<SupportLink>text</SupportLink>]}
    />
  </Container>
);
