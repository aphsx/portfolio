import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { SITE_CONFIG } from '@/config/site'

import enTranslations from './locales/en/translation.json'
import thTranslations from './locales/th/translation.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      th: {
        translation: thTranslations,
      },
    },
    lng: SITE_CONFIG.defaultLanguage,
    supportedLngs: SITE_CONFIG.supportedLanguages as unknown as string[],
    fallbackLng: SITE_CONFIG.defaultLanguage,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
