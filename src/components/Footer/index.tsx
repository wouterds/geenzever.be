import { getYear } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'styled-bootstrap-grid';
import { Container } from './styles';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Container fluid as="footer">
      <Row>
        <Col col={8}>
          {t('website.copyright', { year: getYear(new Date()) })}
        </Col>
        <Col col={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <a href="mailto:info@geenzever.be">{t('cta.contact')}</a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
