'use client'

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

import { siteCopy, type Language } from '@/lib/siteCopy'

type LanguageContextValue = {
  lang: Language
  setLang: (lang: Language) => void
  copy: (typeof siteCopy)[Language]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en')

  const value = useMemo(
    () => ({
      lang,
      setLang,
      copy: siteCopy[lang],
    }),
    [lang]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}
