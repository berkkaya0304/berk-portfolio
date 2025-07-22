"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { en } from "@/data/locales/en";
import { tr } from "@/data/locales/tr";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const translations = {
    en,
    tr,
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, translations: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
