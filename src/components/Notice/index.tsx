// import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';

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
      {t('feedback.notice')}
    </Container>
  );
};
