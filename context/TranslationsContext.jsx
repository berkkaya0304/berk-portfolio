"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { tr } from "@/data/locales/tr";
import { en } from "@/data/locales/en";
import { zh } from "@/data/locales/zh";
import { ru } from "@/data/locales/ru";
import { pl } from "@/data/locales/pl";
import { nl } from "@/data/locales/nl";
import { ja } from "@/data/locales/ja";
import { it } from "@/data/locales/it";
import { fr } from "@/data/locales/fr";
import { es } from "@/data/locales/es";
import { de } from "@/data/locales/de";

const languages = {
  tr,
  en,
  zh,
  ru,
  pl,
  nl,
  ja,
  it,
  fr,
  es,
  de,
};

const TranslationsContext = createContext();

export function TranslationsProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [translations, setTranslations] = useState(languages.en);

  useEffect(() => {
    // Get language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem("language") || "en";
    setCurrentLanguage(savedLanguage);
    setTranslations(languages[savedLanguage]);
  }, []);

  const changeLanguage = (language) => {
    if (languages[language]) {
      setCurrentLanguage(language);
      setTranslations(languages[language]);
      localStorage.setItem("language", language);
    }
  };

  return (
    <TranslationsContext.Provider
      value={{ translations, currentLanguage, changeLanguage }}
    >
      {children}
    </TranslationsContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(TranslationsContext);
  if (context === undefined) {
    throw new Error(
      "useTranslations must be used within a TranslationsProvider"
    );
  }
  return context;
}
