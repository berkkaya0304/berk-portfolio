"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi2";
import { IoLanguageOutline } from "react-icons/io5";
import Image from "next/image";

const languages = [
  { code: "en", name: "English", nativeName: "English", flag: "/flags/gb.svg" },
  { code: "tr", name: "Turkish", nativeName: "Türkçe", flag: "/flags/tr.svg" },
  { code: "zh", name: "Chinese", nativeName: "中文", flag: "/flags/cn.svg" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "/flags/jp.svg" },
  {
    code: "nl",
    name: "Dutch",
    nativeName: "Nederlands",
    flag: "/flags/nl.svg",
  },
  { code: "pl", name: "Polish", nativeName: "Polski", flag: "/flags/pl.svg" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "/flags/es.svg" },
  { code: "fr", name: "French", nativeName: "Français", flag: "/flags/fr.svg" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "/flags/de.svg" },
  {
    code: "it",
    name: "Italian",
    nativeName: "Italiano",
    flag: "/flags/it.svg",
  },
  { code: "ru", name: "Russian", nativeName: "Русский", flag: "/flags/ru.svg" },
];

const LanguageSwitcher = ({ isMobile }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLanguage = languages.find((lang) => lang.code === language);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    localStorage.setItem("preferredLanguage", langCode);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <div
        className="relative w-full flex justify-center items-center py-2"
        ref={dropdownRef}
      >
        {/* Ana dünya ikonu butonu */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            relative z-20
            p-2.5 rounded-full
            bg-secondary border-2
            ${isOpen ? "border-blue-400 text-blue-400" : "border-white/10 text-muted-foreground"}
            transition-all duration-300
          `}
          whileTap={{ scale: 0.95 }}
        >
          <IoLanguageOutline className="w-4 h-4" />
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
                  const angle =
                    index * (360 / languages.length) * (Math.PI / 180);
                  const radius = 90; // Dairenin yarıçapını 120'den 90'a düşürdüm
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
                          delay: index * 0.05,
                        },
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0,
                        transition: {
                          duration: 0.2,
                          delay: (languages.length - index) * 0.05,
                        },
                      }}
                      className={`
                        absolute z-20
                        flex flex-col items-center gap-0.5
                        p-1 rounded-full
                        ${
                          language === lang.code
                            ? "bg-blue-500/20 text-blue-400 scale-110"
                            : "bg-secondary text-muted-foreground"
                        }
                      `}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="relative w-6 h-6 rounded-full overflow-hidden ring-1 ring-white/10">
                        <Image
                          src={lang.flag}
                          alt={lang.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-[10px] font-medium whitespace-nowrap">
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
        className={`
          flex items-center justify-center
          w-8 h-8 rounded-xl
          bg-secondary hover:bg-secondary/80
          text-muted-foreground hover:text-blue-400
          transition-all duration-200
          border ${isOpen ? "border-blue-400" : "border-white/10"}
        `}
        whileTap={{ scale: 0.98 }}
      >
        <IoLanguageOutline className="w-4 h-4" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 z-50 origin-top-right"
            >
              <div className="bg-[#0a0a0a] rounded-xl border border-white/10 shadow-xl shadow-black/50 w-[160px]">
                <div className="flex flex-col">
                  <div className="bg-gradient-to-r from-blue-400/10 via-blue-400/5 to-transparent px-2 py-1.5 border-b border-white/5">
                    <div className="flex items-center gap-1.5">
                      <div className="relative w-3.5 h-3.5 rounded-full overflow-hidden ring-1 ring-white/10">
                        <Image
                          src={currentLanguage?.flag}
                          alt={currentLanguage?.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-[10px] font-medium text-white/80">
                        {currentLanguage?.nativeName}
                      </span>
                    </div>
                  </div>
                  <div className="py-1">
                    {languages.map((lang, index) => (
                      <motion.button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                            delay: index * 0.03,
                          },
                        }}
                        exit={{
                          opacity: 0,
                          x: 20,
                          transition: {
                            duration: 0.15,
                            delay: (languages.length - index) * 0.02,
                          },
                        }}
                        className={`
                          group relative w-full
                          flex items-center justify-between
                          px-2 py-1
                          ${
                            language === lang.code
                              ? "bg-gradient-to-r from-blue-400/10 via-blue-400/5 to-transparent text-blue-400"
                              : "hover:bg-gradient-to-r hover:from-white/5 hover:to-transparent text-white/60 hover:text-white/90"
                          }
                          transition-all duration-300 ease-out
                        `}
                        whileHover={{ x: 2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-1.5">
                          <div
                            className={`
                            relative w-3.5 h-3.5 rounded-full overflow-hidden
                            ring-1 transition-all duration-300
                            ${
                              language === lang.code
                                ? "ring-blue-400 ring-offset-[0.5px] ring-offset-[#0a0a0a]"
                                : "ring-white/20 group-hover:ring-white/40"
                            }
                          `}
                          >
                            <Image
                              src={lang.flag}
                              alt={lang.name}
                              fill
                              loading="lazy"
                              decoding="async"
                              sizes="24px"
                              className="object-cover"
                            />
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-[10px] font-medium">
                              {lang.nativeName}
                            </span>
                            <span className="text-[8px] font-medium opacity-40 uppercase">
                              {lang.code}
                            </span>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
