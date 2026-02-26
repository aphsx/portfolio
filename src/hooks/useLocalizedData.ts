import { useLanguage } from '../contexts'
import { LocalizedText, LocalizedStringArray } from '../types'
import { getLocalizedText, getLocalizedArray as getLocalizedArrayUtil } from '../utils/localization'

export const useLocalizedData = () => {
  const { language } = useLanguage()

  /**
   * Returns a localized string from a LocalizedText object or plain string.
   */
  const getLocalized = (text: LocalizedText | string): string => {
    return getLocalizedText(text, language)
  }

  /**
   * Returns a localized string array from a LocalizedStringArray or plain string[].
   */
  const getLocalizedArray = (items: LocalizedStringArray | string[]): string[] => {
    return getLocalizedArrayUtil(items, language)
  }

  return {
    getLocalized,
    getLocalizedArray,
    language,
  }
}