import Layout from 'components/Layout';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Form, Message } from 'semantic-ui-react';
import { Col, Row } from 'styled-bootstrap-grid';
import { Button } from 'styles/button';
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
          <Message positive>
            <Message.Header>
              {t('feedback.sticker-request-success.title')}
            </Message.Header>
            <p>{t('feedback.sticker-request-success.text')}</p>
          </Message>
        )}
        {status !== 'SUCCESS' && (
          <>
            <h2>{t('page.get-stickers.title')}</h2>
            <p>{t('page.get-stickers.text')}</p>
            {status === 'ERROR_BAD_REQUEST' && (
              <Message warning>
                <Message.Header>
                  {t('feedback.bad-request.title')}
                </Message.Header>
                <p>{t('feedback.bad-request.text')}</p>
              </Message>
            )}
            {status === 'ERROR_DUPLICATE' && (
              <Message negative>
                <Message.Header>
                  {t('feedback.already-requested.title')}
                </Message.Header>
                <p>{t('feedback.already-requested.text')}</p>
              </Message>
            )}
            {status === 'ERROR' && (
              <Message negative>
                <Message.Header>
                  {t('feedback.generic-error.title')}
                </Message.Header>
                <p>{t('feedback.generic-error.text')}</p>
              </Message>
            )}

            <Form
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
              <Row>
                <Col sm={6} className="field">
                  <label htmlFor="firstName">{t('label.first-name')} *</label>
                  <input
                    id="firstName"
                    placeholder={t('placeholder.first-name')}
                    required
                    value={firstName}
                    onChange={(e: any) => setFirstName(e.target.value)}
                  />
                </Col>
                <Col sm={6} className="field">
                  <label htmlFor="lastName">{t('label.last-name')} *</label>
                  <input
                    id="lastName"
                    placeholder={t('placeholder.last-name')}
                    required
                    value={lastName}
                    onChange={(e: any) => setLastName(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12} className="field">
                  <label htmlFor="email">{t('label.email')} *</label>
                  <input
                    id="email"
                    type="email"
                    placeholder={t('placeholder.email')}
                    required
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={8} className="field">
                  <label htmlFor="street">{t('label.street')} *</label>
                  <input
                    id="street"
                    placeholder={t('placeholder.street')}
                    required
                    value={street}
                    onChange={(e: any) => setStreet(e.target.value)}
                  />
                </Col>
                <Col sm={4} className="field">
                  <label htmlFor="bus">{t('label.bus')}</label>
                  <input
                    id="bus"
                    placeholder={t('placeholder.bus')}
                    value={bus}
                    onChange={(e: any) => setBus(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={6} className="field">
                  <label htmlFor="postalCode">{t('label.postal-code')} *</label>
                  <input
                    id="postalCode"
                    placeholder={t('placeholder.postal-code')}
                    required
                    value={postalCode}
                    onChange={(e: any) => setPostalCode(e.target.value)}
                  />
                </Col>
                <Col sm={6} className="field">
                  <label htmlFor="city">{t('label.city')} *</label>
                  <input
                    id="city"
                    placeholder={t('placeholder.city')}
                    required
                    value={city}
                    onChange={(e: any) => setCity(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12} className="field">
                  <label htmlFor="note">{t('label.note')}</label>
                  <textarea
                    id="note"
                    placeholder={t('placeholder.note')}
                    value={note}
                    onChange={(e: any) => setNote(e.target.value)}
                    rows={3}
                  />
                </Col>
              </Row>

              <Button
                type="submit"
                style={{ marginTop: 10 }}
                disabled={status === 'LOADING'}
              >
                {status === 'LOADING' && t('label.loading')}
                {status !== 'LOADING' && t('cta.send')}
              </Button>
            </Form>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default withContainer(RequestStickers);
