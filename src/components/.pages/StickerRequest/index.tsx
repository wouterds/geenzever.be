import Layout from 'components/Layout';
import { differenceInSeconds, format as formatTime } from 'date-fns';
import dateFnsLocale from 'date-fns/locale/nl';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
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
    dispatchedAt: Date | null;
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
          <div className="toast toast-success">
            {t('feedback.sticker-request.confirmed')}
          </div>
        )}

        {!justConfirmed &&
          !stickerRequest.rejectedAt &&
          !stickerRequest.dispatchedAt && (
            <div className="toast toast-warning">
              {t('feedback.sticker-request.pending')}
            </div>
          )}

        {stickerRequest.rejectedAt && (
          <div className="toast toast-error">
            {t('feedback.sticker-request.rejected')}
          </div>
        )}

        {stickerRequest.dispatchedAt && (
          <div className="toast toast-success">
            {t('feedback.sticker-request.sent', {
              dispatchedAt: formatTime(
                stickerRequest.dispatchedAt,
                'dddd D MMMM YYYY',
                {
                  locale: dateFnsLocale,
                },
              ),
            })}
          </div>
        )}
      </Container>
    </Layout>
  );
};

export default withContainer(StickerRequest);
