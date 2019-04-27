import Layout from 'components/Layout';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import withContainer from './container';
import { Container } from './styles';

interface Props {
  status: string | null;
  isLoading: boolean;
  requestStickers: (
    firstName: string,
    lastName: string,
    email: string,
    street: string,
    bus: string,
    postalCode: string,
    city: string,
    note: string,
  ) => Promise<void>;
}

const RequestStickers = (props: Props) => {
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [bus, setBus] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [note, setNote] = useState('');
  const { status, requestStickers } = props;

  useEffect(() => {
    if (!status) {
      return;
    }

    if (status.indexOf('ERROR') === -1) {
      return;
    }

    window.scrollTo(500, 0);
  }, [status]);

  return (
    <Layout>
      <Head>
        <title>
          {t('page.get-stickers.title')} - {t('website.title')}
        </title>
      </Head>
      <Container>
        {status === 'SUCCESS' && (
          <div className="toast toast-success">
            {t('feedback.sticker-request-success')}
          </div>
        )}
        {status !== 'SUCCESS' && (
          <>
            <h2>{t('page.get-stickers.title')}</h2>
            <p>{t('page.get-stickers.text')}</p>

            {status === 'ERROR_BAD_REQUEST' && (
              <div className="toast toast-warning">
                {t('feedback.bad-request')}
              </div>
            )}
            {status === 'ERROR_DUPLICATE' && (
              <div className="toast toast-error">
                {t('feedback.already-requested')}
              </div>
            )}
            {status === 'ERROR' && (
              <div className="toast toast-error">
                {t('feedback.generic-error')}
              </div>
            )}

            <form
              onSubmit={(e: any) => {
                e.preventDefault();

                if (status === 'LOADING') {
                  return;
                }

                requestStickers(
                  firstName,
                  lastName,
                  email,
                  street,
                  bus,
                  postalCode,
                  city,
                  note,
                ).catch();
              }}
            >
              <div className="columns">
                <div className="form-group column col-6 col-xs-12">
                  <label className="form-label" htmlFor="firstName">
                    {t('label.first-name')} *
                  </label>
                  <input
                    className="form-input"
                    id="firstName"
                    placeholder={t('placeholder.first-name')}
                    required
                    value={firstName}
                    onChange={(e: any) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group column col-6 col-xs-12">
                  <label className="form-label" htmlFor="lastName">
                    {t('label.last-name')} *
                  </label>
                  <input
                    className="form-input"
                    id="lastName"
                    placeholder={t('placeholder.last-name')}
                    required
                    value={lastName}
                    onChange={(e: any) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="columns">
                <div className="form-group column col-12">
                  <label className="form-label" htmlFor="email">
                    {t('label.email')} *
                  </label>
                  <input
                    className="form-input"
                    id="email"
                    type="email"
                    placeholder={t('placeholder.email')}
                    required
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="columns">
                <div className="form-group column col-8 col-xs-12">
                  <label className="form-label" htmlFor="street">
                    {t('label.street')} *
                  </label>
                  <input
                    className="form-input"
                    id="street"
                    placeholder={t('placeholder.street')}
                    required
                    value={street}
                    onChange={(e: any) => setStreet(e.target.value)}
                  />
                </div>
                <div className="form-group column col-4 col-xs-12">
                  <label className="form-label" htmlFor="bus">
                    {t('label.bus')}
                  </label>
                  <input
                    className="form-input"
                    id="bus"
                    placeholder={t('placeholder.bus')}
                    value={bus}
                    onChange={(e: any) => setBus(e.target.value)}
                  />
                </div>
              </div>
              <div className="columns">
                <div className="form-group column col-6 col-xs-12">
                  <label className="form-label" htmlFor="postalCode">
                    {t('label.postal-code')} *
                  </label>
                  <input
                    className="form-input"
                    id="postalCode"
                    placeholder={t('placeholder.postal-code')}
                    required
                    value={postalCode}
                    onChange={(e: any) => setPostalCode(e.target.value)}
                  />
                </div>
                <div className="form-group column col-6 col-xs-12">
                  <label className="form-label" htmlFor="city">
                    {t('label.city')} *
                  </label>
                  <input
                    className="form-input"
                    id="city"
                    placeholder={t('placeholder.city')}
                    required
                    value={city}
                    onChange={(e: any) => setCity(e.target.value)}
                  />
                </div>
              </div>
              <div className="columns">
                <div className="form-group column col-12">
                  <label className="form-label" htmlFor="note">
                    {t('label.note')}
                  </label>
                  <textarea
                    className="form-input"
                    id="note"
                    placeholder={t('placeholder.note')}
                    value={note}
                    onChange={(e: any) => setNote(e.target.value)}
                    rows={3}
                  />
                </div>
              </div>

              <button
                type="submit"
                style={{ marginTop: 10 }}
                disabled={status === 'LOADING'}
                className="btn btn-primary"
              >
                {status === 'LOADING' && t('label.loading')}
                {status !== 'LOADING' && t('cta.send')}
              </button>
            </form>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default withContainer(RequestStickers);
