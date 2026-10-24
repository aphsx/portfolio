import { useTranslation } from 'react-i18next'
import { useParams } from 'next/navigation'
import { LocalizedText, LocalizedStringArray } from '@/types'
import { getLocalizedText, getLocalizedArray as getLocalizedArrayUtil } from '@/utils/localization'
import { SITE_CONFIG, SupportedLanguage } from '@/config/site'

const isSupported = (lang?: string): lang is SupportedLanguage =>
  Boolean(lang && (SITE_CONFIG.supportedLanguages as readonly string[]).includes(lang))

export const useLocalizedData = () => {
  const { t, i18n } = useTranslation()
  const params = useParams()
  const langParam = params?.lang as string | undefined

  const currentI18n = i18n.language?.split('-')[0]
  const language: SupportedLanguage = isSupported(langParam)
    ? langParam
    : isSupported(currentI18n)
      ? currentI18n
      : SITE_CONFIG.defaultLanguage

  /**
   * Returns a localized string.
   * Priority:
   * 1. If it's a string and t() returns a different value, use that.
   * 2. If it's a LocalizedText object, get the field for current language.
   * 3. Fallback to raw string.
   */
  const getLocalized = (text: LocalizedText | string): string => {
    if (typeof text === 'string') {
      const translated = t(text)
      if (translated !== text) return translated
      return text
    }
    return getLocalizedText(text, language)
  }

  /**
   * Returns a localized string array.
   */
  const getLocalizedArray = (items: LocalizedStringArray | string[]): string[] => {
    if (Array.isArray(items)) {
      return items.map((item) => getLocalized(item))
    }
    return getLocalizedArrayUtil(items, language)
  }

  return {
    getLocalized,
    getLocalizedArray,
    language,
  }
}
