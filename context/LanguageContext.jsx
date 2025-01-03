'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { en } from '@/data/locales/en';
import { tr } from '@/data/locales/tr';
import { zh } from '@/data/locales/zh';
import { ja } from '@/data/locales/ja';
import { nl } from '@/data/locales/nl';
import { pl } from '@/data/locales/pl';
import { es } from '@/data/locales/es';
import { fr } from '@/data/locales/fr';
import { de } from '@/data/locales/de';
import { it } from '@/data/locales/it';
import { ru } from '@/data/locales/ru';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const translations = {
    en,
    tr,
    zh,
    ja,
    nl,
    pl,
    es,
    fr,
    de,
    it,
    ru,
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 