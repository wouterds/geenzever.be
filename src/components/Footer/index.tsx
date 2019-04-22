import { getYear } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'styled-bootstrap-grid';
import { Container } from './styles';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Container fluid as="footer">
      <Row>
        <Col col={12}>
          {t('website.copyright', { year: getYear(new Date()) })}
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
