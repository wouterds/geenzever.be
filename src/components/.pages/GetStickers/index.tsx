import Layout from 'components/Layout';
import Head from 'next/head';
import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Form } from 'semantic-ui-react';
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
    streetAndNumber: string,
    busNumber: string,
    postalCode: string,
    city: string,
  ) => Promise<void>;
}

const RequestStickers = (props: Props) => {
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [streetAndNumber, setStreetAndNumber] = useState('');
  const [busNumber, setBusNumber] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const { status, requestStickers } = props;

  return (
    <Layout>
      <Head>
        <title>{t('page.get-stickers.title')}</title>
      </Head>
      <Container>
        <h2>{t('page.get-stickers.title')}</h2>
        <p>
          {t('page.get-stickers.text-p1')}
          <br />
          <Trans
            i18nKey="page.get-stickers.text-p2"
            components={[<strong>text</strong>]}
          />
        </p>

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
              streetAndNumber,
              busNumber,
              postalCode,
              city,
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
              <label htmlFor="streetAndNumber">
                {t('label.street-and-number')} *
              </label>
              <input
                id="streetAndNumber"
                placeholder={t('placeholder.street-and-number')}
                required
                value={streetAndNumber}
                onChange={(e: any) => setStreetAndNumber(e.target.value)}
              />
            </Col>
            <Col sm={4} className="field">
              <label htmlFor="busNumber">{t('label.bus-number')}</label>
              <input
                id="busNumber"
                placeholder={t('placeholder.bus-number')}
                value={busNumber}
                onChange={(e: any) => setBusNumber(e.target.value)}
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

          <Button
            type="submit"
            style={{ marginTop: 10 }}
            disabled={status === 'LOADING'}
          >
            {status === 'LOADING' && t('label.loading')}
            {status !== 'LOADING' && t('cta.send')}
          </Button>
        </Form>
      </Container>
    </Layout>
  );
};

export default withContainer(RequestStickers);
