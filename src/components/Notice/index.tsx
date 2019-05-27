import { memo, useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

export default memo(() => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, [true]);

  return (
    <div className={`modal ${isActive ? 'active' : ''}`}>
      <a
        onClick={() => setIsActive(false)}
        className="modal-overlay"
        aria-label={t('cta.close')}
      />
      <div className="modal-container">
        <div className="modal-header">
          <a
            onClick={() => setIsActive(false)}
            className="btn btn-clear float-right"
            aria-label={t('cta.close')}
          />
          <div className="modal-title h5">{t('notice.title')}</div>
        </div>
        <div className="modal-body">
          <div className="content">
            <p>
              <Trans i18nKey="notice.text" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
