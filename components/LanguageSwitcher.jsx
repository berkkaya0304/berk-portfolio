'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { GB, TR, CN, JP, NL, PL, ES, FR, DE, IT, RU } from 'country-flag-icons/react/3x2';

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  const getLanguageDisplay = () => {
    switch (language) {
      case 'en':
        return {
          flag: <GB className="w-5 h-5 rounded-sm" />,
          text: "EN"
        };
      case 'tr':
        return {
          flag: <TR className="w-5 h-5 rounded-sm" />,
          text: "TR"
        };
      case 'zh':
        return {
          flag: <CN className="w-5 h-5 rounded-sm" />,
          text: "中文"
        };
      case 'ja':
        return {
          flag: <JP className="w-5 h-5 rounded-sm" />,
          text: "日本語"
        };
      case 'nl':
        return {
          flag: <NL className="w-5 h-5 rounded-sm" />,
          text: "NL"
        };
      case 'pl':
        return {
          flag: <PL className="w-5 h-5 rounded-sm" />,
          text: "PL"
        };
      case 'es':
        return {
          flag: <ES className="w-5 h-5 rounded-sm" />,
          text: "ES"
        };
      case 'fr':
        return {
          flag: <FR className="w-5 h-5 rounded-sm" />,
          text: "FR"
        };
      case 'de':
        return {
          flag: <DE className="w-5 h-5 rounded-sm" />,
          text: "DE"
        };
      case 'it':
        return {
          flag: <IT className="w-5 h-5 rounded-sm" />,
          text: "IT"
        };
      case 'ru':
        return {
          flag: <RU className="w-5 h-5 rounded-sm" />,
          text: "RU"
        };
      default:
        return {
          flag: <GB className="w-5 h-5 rounded-sm" />,
          text: "EN"
        };
    }
  };

  const currentLanguage = getLanguageDisplay();

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 rounded-xl blur-md opacity-20 group-hover:opacity-30 transition-opacity" />
      
      {/* Button Content */}
      <div className="relative bg-gradient-to-r from-slate-900/80 to-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
        <div className="flex items-center gap-2">
          {currentLanguage.flag}
          <span className="text-sm font-medium text-blue-400">{currentLanguage.text}</span>
        </div>
      </div>
    </motion.button>
  );
} 