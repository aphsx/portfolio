import { createContext, useContext, useState, ReactNode } from 'react'
import { translations, TranslationKey } from './translations'

export type Language = 'en' | 'th'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const savedLanguage = localStorage.getItem('preferred-language') as Language
      return savedLanguage && ['en', 'th'].includes(savedLanguage) ? savedLanguage : 'en'
    } catch {
      return 'en'
    }
  })

  const handleSetLanguage = (newLanguage: Language) => {
    try {
      setLanguage(newLanguage)
      localStorage.setItem('preferred-language', newLanguage)
    } catch (error) {
      console.warn('Failed to save language preference:', error)
      setLanguage(newLanguage)
    }
  }

  const t = (key: TranslationKey): string => {
    try {
      const translation = translations[language][key]
      if (!translation) {
        console.warn(`Translation missing for key: ${key}`)
        return translations.en[key] || key
      }
      return translation
    } catch (error) {
      console.error('Translation error:', error)
      return key
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}