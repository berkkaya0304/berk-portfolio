"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { tr } from "@/data/locales/tr";
import { en } from "@/data/locales/en";

const languages = {
  tr,
  en,
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
