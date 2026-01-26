'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import enTranslations from '@/locales/en.json'
import csTranslations from '@/locales/cs.json'
import deTranslations from '@/locales/de.json'
import ruTranslations from '@/locales/ru.json'

type Language = 'en' | 'cs' | 'de' | 'ru'

const translations = {
  en: enTranslations,
  cs: csTranslations,
  de: deTranslations,
  ru: ruTranslations,
}

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    // Load language from localStorage or detect from browser
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && ['en', 'cs', 'de', 'ru'].includes(savedLang)) {
      setLanguageState(savedLang)
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0]
      if (['en', 'cs', 'de', 'ru'].includes(browserLang)) {
        setLanguageState(browserLang as Language)
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        // Fallback to English if translation missing
        value = translations.en
        for (const k2 of keys) {
          if (value && typeof value === 'object' && k2 in value) {
            value = value[k2]
          } else {
            return key
          }
        }
        break
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
