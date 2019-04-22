import Layout from 'components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Container, Question } from './styles';

const SupportLink = ({ children }: { children: ReactNode }) => (
  <span>
    <Link href="/support" prefetch>
      <a>{children}</a>
    </Link>
  </span>
);

const FAQ = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>{t('page.faq.title')}</title>
      </Head>
      <Container>
        <h2>{t('page.faq.title')}</h2>

        <Question>
          <p>
            <em>{t('page.faq.questions.1.question')}</em>
          </p>
          <p>{t('page.faq.questions.1.answer')}</p>
        </Question>

        <Question>
          <p>
            <em>{t('page.faq.questions.2.question')}</em>
          </p>
          <p>
            <Trans
              i18nKey="page.faq.questions.2.answer"
              components={[<strong>Text</strong>]}
            />
          </p>
        </Question>

        <Question>
          <p>
            <em>{t('page.faq.questions.3.question')}</em>
          </p>
          <p>{t('page.faq.questions.3.answer')}</p>
        </Question>

        <Question>
          <p>
            <em>{t('page.faq.questions.4.question')}</em>
          </p>
          <p>{t('page.faq.questions.4.answer')}</p>
        </Question>

        <Question>
          <p>
            <em>{t('page.faq.questions.5.question')}</em>
          </p>
          <p>
            <Trans
              i18nKey="page.faq.questions.5.answer"
              components={[<SupportLink>Text</SupportLink>]}
            />
          </p>
        </Question>

        <Question>
          <p>
            <em>{t('page.faq.questions.6.question')}</em>
          </p>
          <p>{t('page.faq.questions.6.answer')}</p>
        </Question>

        <Question>
          <p>
            <em>{t('page.faq.questions.7.question')}</em>
          </p>
          <p>{t('page.faq.questions.7.answer')}</p>
        </Question>

        <Question>
          <p>
            <em>{t('page.faq.questions.8.question')}</em>
          </p>
          <p>{t('page.faq.questions.8.answer')}</p>
        </Question>
      </Container>
    </Layout>
  );
};

export default FAQ;
