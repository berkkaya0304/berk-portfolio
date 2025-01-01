'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-md text-sm font-medium bg-zinc-800 hover:bg-zinc-700 transition-colors"
      aria-label="Toggle language"
    >
      {language.toUpperCase()}
    </button>
  );
} 