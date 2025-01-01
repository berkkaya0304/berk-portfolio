'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { GB, TR } from 'country-flag-icons/react/3x2';

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

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
          {language === 'en' ? (
            <>
              <GB className="w-5 h-5 rounded-sm" />
              <span className="text-sm font-medium text-blue-400">EN</span>
            </>
          ) : (
            <>
              <TR className="w-5 h-5 rounded-sm" />
              <span className="text-sm font-medium text-blue-400">TR</span>
            </>
          )}
        </div>
      </div>
    </motion.button>
  );
} 