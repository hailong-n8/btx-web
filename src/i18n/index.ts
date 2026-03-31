import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { fallbackLanguage, languageResources, resolveLanguage, supportedLanguageCodes } from './languages'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: languageResources,
    supportedLngs: supportedLanguageCodes,
    fallbackLng: fallbackLanguage,
    nonExplicitSupportedLngs: false,
    load: 'currentOnly',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

const applyDocumentLanguage = (code?: string) => {
  if (typeof document === 'undefined') return
  const lang = resolveLanguage(code ?? i18n.language)
  document.documentElement.lang = lang.code
  document.documentElement.dir = lang.dir
}

i18n.on('languageChanged', applyDocumentLanguage)
applyDocumentLanguage(i18n.language)

export default i18n
