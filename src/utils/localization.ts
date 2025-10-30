import { LocalizedText } from '../types'

export const getLocalizedText = (
  text: LocalizedText | LocalizedText | string | string[],
  language: 'en' | 'th'
): string | string[] => {
  if (typeof text === 'string') {
    return text
  }

  if (Array.isArray(text)) {
    return text
  }

  if (typeof text === 'object' && text !== null && 'en' in text) {
    const localizedObj = text as LocalizedText
    if (language === 'th' && localizedObj.th) {
      return Array.isArray(localizedObj.th) ? localizedObj.th : localizedObj.th
    }
    return Array.isArray(localizedObj.en) ? localizedObj.en : localizedObj.en
  }

  return text
}

export const createLocalizedText = (
  en: string | string[],
  th?: string | string[]
): LocalizedText => ({
  en,
  ...(th && { th })
})

export const isLocalizedText = (value: unknown): value is LocalizedText => {
  return Boolean(value && typeof value === 'object' && value !== null && 'en' in value && ((value as LocalizedText).en !== undefined))
}