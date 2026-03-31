import ar from './locales/ar.json'
import en from './locales/en.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import hi from './locales/hi.json'
import ja from './locales/ja.json'
import pt from './locales/pt.json'
import zhCN from './locales/zh-CN.json'
import zhTW from './locales/zh-TW.json'

export type LanguageDirection = 'ltr' | 'rtl'

export interface AppLanguage {
  code: string
  label: string
  short: string
  dir: LanguageDirection
  enabled: boolean
}

export const appLanguages: AppLanguage[] = [
  { code: 'en', label: 'English', short: 'EN', dir: 'ltr', enabled: true },
  { code: 'zh-CN', label: '简体中文', short: '简', dir: 'ltr', enabled: true },
  { code: 'zh-TW', label: '繁体中文', short: '繁', dir: 'ltr', enabled: true },
  { code: 'es', label: 'Spanish', short: 'ES', dir: 'ltr', enabled: true },
  { code: 'pt', label: 'Portuguese', short: 'PT', dir: 'ltr', enabled: true },
  { code: 'fr', label: 'French', short: 'FR', dir: 'ltr', enabled: true },
  { code: 'hi', label: 'Hindi', short: 'HI', dir: 'ltr', enabled: true },
  { code: 'ja', label: 'Japanese', short: 'JA', dir: 'ltr', enabled: true },
  { code: 'ar', label: 'العربية', short: 'AR', dir: 'rtl', enabled: true },
]

export const defaultLanguage = 'en'
export const fallbackLanguage = 'en'

export const languageResources = {
  en: { translation: en },
  'zh-CN': { translation: zhCN },
  'zh-TW': { translation: zhTW },
  es: { translation: es },
  pt: { translation: pt },
  fr: { translation: fr },
  hi: { translation: hi },
  ja: { translation: ja },
  ar: { translation: ar },
}

export const supportedLanguageCodes = appLanguages
  .filter((lang) => lang.enabled)
  .map((lang) => lang.code)

export function resolveLanguage(code?: string | null): AppLanguage {
  if (!code) return appLanguages[0]
  const normalized = code.toLowerCase()
  const exact = appLanguages.find((lang) => lang.code.toLowerCase() === normalized)
  if (exact) return exact
  const partial = appLanguages.find((lang) => normalized.startsWith(`${lang.code.toLowerCase()}-`))
  return partial ?? appLanguages[0]
}
