import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const init = (language: string = 'nl') => {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        nl: { translation: require('@resources/translations/nl.json') },
      },
      lng: language,
      fallbackLng: 'nl',
      returnEmptyString: false,
    })
    .catch();
};

export const changeLanguage = (language: string) => {
  i18n.changeLanguage(language).catch();
};

export const t = (key: string, data: any = {}): string => i18n.t(key, data);

export default {
  init,
  changeLanguage,
  t,
};
