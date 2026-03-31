import { describe, expect, it } from 'vitest'
import {
  appLanguages,
  fallbackLanguage,
  languageResources,
  resolveLanguage,
  supportedLanguageCodes,
} from '../../../src/i18n/languages'

describe('i18n language registry', () => {
  it('has enabled language codes aligned with supportedLanguageCodes', () => {
    const enabled = appLanguages.filter((lang) => lang.enabled).map((lang) => lang.code).sort()
    const supported = [...supportedLanguageCodes].sort()
    expect(supported).toEqual(enabled)
  })

  it('keeps resource codes aligned with supported languages', () => {
    const resourceCodes = Object.keys(languageResources).sort()
    const supported = [...supportedLanguageCodes].sort()
    expect(resourceCodes).toEqual(supported)
  })

  it('includes fallback language in supported list', () => {
    expect(supportedLanguageCodes).toContain(fallbackLanguage)
  })

  it('resolves exact and regional language variants', () => {
    expect(resolveLanguage('en').code).toBe('en')
    expect(resolveLanguage('en-US').code).toBe('en')
    expect(resolveLanguage('zh-CN').code).toBe('zh-CN')
    expect(resolveLanguage('zh-CN-x-private').code).toBe('zh-CN')
  })

  it('falls back to default language for unknown language', () => {
    expect(resolveLanguage('xx-YY').code).toBe('en')
  })
})
