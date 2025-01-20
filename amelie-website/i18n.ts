import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './public/locales/en/common.json';
import deTranslations from './public/locales/de/common.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enTranslations,
    },
    de: {
      common: deTranslations,
    },
  },
  lng: 'de',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;