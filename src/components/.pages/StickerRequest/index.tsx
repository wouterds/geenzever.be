import Layout from 'components/Layout';
import { differenceInSeconds, format as formatTime } from 'date-fns';
import dateFnsLocale from 'date-fns/locale/nl';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { Message } from 'semantic-ui-react';
import Error from '../Error';
import withContainer from './container';
import { Container } from './styles';

interface Props {
  stickerRequest: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    street: string;
    bus: string;
    postalCode: string;
    city: string;
    note: string;
    emailConfirmedAt: Date | null;
    rejectedAt: Date | null;
    sentAt: Date | null;
  } | null;
}

const StickerRequest = (props: Props) => {
  const { t } = useTranslation();
  const { stickerRequest } = props;

  if (!stickerRequest) {
    return <Error />;
  }

  const justConfirmed =
    stickerRequest.emailConfirmedAt &&
    differenceInSeconds(new Date(), stickerRequest.emailConfirmedAt) < 30;

  return (
    <Layout>
      <Head>
        <meta key="robots" name="robots" content="noindex" />
      </Head>

      <Container>
        <h2>{t('page.sticker-request.title')}</h2>

        {justConfirmed && (
          <Message positive>
            <Message.Header>
              {t('feedback.sticker-request.confirmed.title')}
            </Message.Header>
            <p>{t('feedback.sticker-request.confirmed.text')}</p>
          </Message>
        )}

        {!justConfirmed &&
          !stickerRequest.rejectedAt &&
          !stickerRequest.sentAt && (
            <Message warning>
              <Message.Header>
                {t('feedback.sticker-request.pending.title')}
              </Message.Header>
              <p>{t('feedback.sticker-request.pending.text')}</p>
            </Message>
          )}

        {stickerRequest.rejectedAt && (
          <Message negative>
            <Message.Header>
              {t('feedback.sticker-request.rejected.title')}
            </Message.Header>
            <p>{t('feedback.sticker-request.rejected.text')}</p>
          </Message>
        )}

        {stickerRequest.sentAt && (
          <Message positive>
            <Message.Header>
              {t('feedback.sticker-request.sent.title')}
            </Message.Header>
            <p>
              {t('feedback.sticker-request.sent.text', {
                sentAt: formatTime(stickerRequest.sentAt, 'dddd D MMMM YYYY', {
                  locale: dateFnsLocale,
                }),
              })}
            </p>
          </Message>
        )}
      </Container>
    </Layout>
  );
};

export default withContainer(StickerRequest);
