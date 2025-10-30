import { useLanguage } from '../contexts'
import { LocalizedText } from '../types'
import { getLocalizedText } from '../utils/localization'

export const useLocalizedData = () => {
  const { language } = useLanguage()

  const getLocalized = (text: LocalizedText | string): string => {
    const result = getLocalizedText(text, language)
    return Array.isArray(result) ? result[0] || '' : result
  }

  const getLocalizedArray = (items: LocalizedText | (LocalizedText | string)[]): string[] => {
    // ถ้าเป็น LocalizedText object ที่มี array ข้างใน
    if (items && typeof items === 'object' && !Array.isArray(items) && 'en' in items) {
      const localizedText = items as LocalizedText
      const result = language === 'th' && localizedText.th ? localizedText.th : localizedText.en
      return Array.isArray(result) ? result : [result]
    }

    // ถ้าเป็น array ปกติ
    if (Array.isArray(items)) {
      return items.map(item => {
        const result = getLocalizedText(item, language)
        return Array.isArray(result) ? result[0] : result
      })
    }

    return []
  }

  return {
    getLocalized,
    getLocalizedArray,
    language
  }
}