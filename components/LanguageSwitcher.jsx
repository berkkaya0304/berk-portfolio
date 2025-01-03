'use client';

import { useLanguage } from "@/context/LanguageContext";
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi2";
import { IoLanguageOutline } from "react-icons/io5";
import Image from "next/image";

const languages = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '/flags/gb.svg' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '/flags/tr.svg' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '/flags/cn.svg' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '/flags/jp.svg' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '/flags/nl.svg' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '/flags/pl.svg' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '/flags/es.svg' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '/flags/fr.svg' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '/flags/de.svg' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '/flags/it.svg' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '/flags/ru.svg' },
];

const LanguageSwitcher = ({ isMobile }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const currentLanguage = languages.find(lang => lang.code === language);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    localStorage.setItem('preferredLanguage', langCode);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <div className="relative w-full flex justify-center items-center py-4" ref={dropdownRef}>
        {/* Ana dünya ikonu butonu */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            relative z-20
            p-4 rounded-full
            bg-secondary border-2
            ${isOpen ? 'border-blue-400 text-blue-400' : 'border-white/10 text-muted-foreground'}
            transition-all duration-300
          `}
          whileTap={{ scale: 0.95 }}
        >
          <IoLanguageOutline className="w-6 h-6" />
        </motion.button>

        {/* Dil seçenekleri */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Arkaplan overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 z-10"
                onClick={() => setIsOpen(false)}
              />

              {/* Dil butonları */}
              <div className="absolute inset-0 flex items-center justify-center">
                {languages.map((lang, index) => {
                  // Dairenin çevresinde konumlandırma için açı hesaplama
                  const angle = (index * (360 / languages.length)) * (Math.PI / 180);
                  const radius = 120; // Dairenin yarıçapı
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      initial={{ opacity: 0, scale: 0, x, y }}
                      animate={{ 
                        opacity: 1, 
                        scale: language === lang.code ? 1.2 : 1,
                        x,
                        y,
                        transition: { 
                          type: "spring",
                          stiffness: 150,
                          damping: 15,
                          delay: index * 0.05
                        }
                      }}
                      exit={{ 
                        opacity: 0, 
                        scale: 0,
                        transition: { 
                          duration: 0.2,
                          delay: (languages.length - index) * 0.05
                        }
                      }}
                      className={`
                        absolute z-20
                        flex flex-col items-center gap-1
                        p-2 rounded-full
                        ${language === lang.code 
                          ? 'bg-blue-500/20 text-blue-400 scale-110' 
                          : 'bg-secondary text-muted-foreground'
                        }
                      `}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/10">
                        <Image
                          src={lang.flag}
                          alt={lang.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-xs font-medium whitespace-nowrap">
                        {lang.code.toUpperCase()}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center gap-2
          px-3 py-2 rounded-xl
          bg-secondary hover:bg-secondary/80
          text-muted-foreground hover:text-blue-400
          transition-all duration-200
          border border-white/10
        "
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative w-5 h-5 rounded-full overflow-hidden">
          <Image
            src={currentLanguage?.flag}
            alt={currentLanguage?.name}
            fill
            className="object-cover"
          />
        </div>
        <span className="text-sm font-medium">{currentLanguage?.nativeName}</span>
        <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="
              absolute right-0 mt-2
              bg-[#1a1a1a]
              rounded-xl overflow-hidden
              shadow-xl shadow-black/20
              min-w-[200px]
              border border-white/10
              z-50
            "
          >
            <div className="py-1">
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`
                    w-full flex items-center gap-3
                    px-3 py-2
                    text-sm transition-all duration-150
                    ${language === lang.code 
                      ? 'bg-blue-500/20 text-blue-400' 
                      : 'hover:bg-blue-500/10 text-muted-foreground hover:text-blue-400'
                    }
                  `}
                >
                  <div className="relative w-5 h-5 rounded-full overflow-hidden">
                    <Image
                      src={lang.flag}
                      alt={lang.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span>{lang.nativeName}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher; 