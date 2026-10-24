import { LocalizedText, LocalizedStringArray } from '../types'
import { SupportedLanguage } from '../config/site'

/**
 * Returns the localized string for the current language.
 * Falls back to English if the requested language is not available.
 */
export const getLocalizedText = (
  text: LocalizedText | string,
  language: SupportedLanguage
): string => {
  if (typeof text === 'string') {
    return text
  }

  if (typeof text === 'object' && text !== null && 'en' in text) {
    const localized = text as LocalizedText
    if (language === 'th' && localized.th) {
      return localized.th
    }
    return localized.en
  }

  return ''
}

/**
 * Returns the localized string array for the current language.
 * Falls back to English if the requested language is not available.
 */
export const getLocalizedArray = (
  items: LocalizedStringArray | string[],
  language: SupportedLanguage
): string[] => {
  if (Array.isArray(items)) {
    return items
  }

  if (typeof items === 'object' && items !== null && 'en' in items) {
    const localized = items as LocalizedStringArray
    if (language === 'th' && localized.th) {
      return localized.th
    }
    return localized.en
  }

  return []
}