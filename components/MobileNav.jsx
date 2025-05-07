"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const { translations } = useLanguage();

  const navCategories = [
    {
      name: "Main",
      items: [
        {
          name: translations.nav.home,
          path: "/",
        },
        {
          name: translations.nav.services,
          path: "/services",
        },
        {
          name: translations.nav.resume,
          path: "/resume",
        },
      ],
    },
    {
      name: "Work",
      items: [
        {
          name: translations.nav.portfolio,
          path: "/work",
        },
        {
          name: translations.nav.programs,
          path: "/program",
        },
      ],
    },
    {
      name: "Social",
      items: [
        {
          name: translations.nav.social,
          path: "/social",
        },
        {
          name: translations.nav.articles,
          path: "/blog",
        },
        {
          name: translations.nav.travel,
          path: "/travel",
        },
        {
          name: translations.nav.contact,
          path: "/contact",
        },
        {
          name: translations.nav.personalBrand,
          path: "/personalbrand",
        },
      ],
    },
  ];

  const toggleCategory = (categoryName) => {
    setExpandedCategory(
      expandedCategory === categoryName ? null : categoryName,
    );
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <CiMenuFries className="cursor-pointer text-[32px] text-blue-400 hover:text-blue-600 transition-colors" />
        </motion.div>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="bg-background/95 backdrop-blur-lg border-none"
      >
        <div className="flex flex-col h-full justify-between py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <Link href="/" onClick={() => setIsOpen(false)}>
              <motion.h1
                className="text-3xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-normal bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Berk
                </span>{" "}
                <span className="font-light text-blue-500">Kaya</span>
              </motion.h1>
            </Link>
          </motion.div>

          <nav className="flex flex-col gap-4">
            <AnimatePresence>
              {navCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: categoryIndex * 0.1 }}
                  className="flex flex-col"
                >
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className={`flex items-center justify-between py-2 px-4 rounded-lg transition-all duration-300 ${
                      expandedCategory === category.name
                        ? "bg-blue-500/10 text-blue-400"
                        : "text-muted-foreground hover:bg-blue-500/5 hover:text-blue-400"
                    }`}
                  >
                    <h3 className="text-sm font-medium uppercase tracking-wider">
                      {category.name}
                    </h3>
                    <motion.div
                      animate={{
                        rotate: expandedCategory === category.name ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`${
                        expandedCategory === category.name
                          ? "text-blue-400"
                          : "text-muted-foreground"
                      }`}
                    >
                      <IoIosArrowDown />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedCategory === category.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-1 py-2">
                          {category.items.map((link, index) => {
                            const isActive = link.path === pathname;

                            return (
                              <Link
                                href={link.path}
                                key={index}
                                onClick={() => setIsOpen(false)}
                                className={`relative group py-2 px-4 rounded-lg transition-all duration-300 ${
                                  isActive
                                    ? "bg-blue-500/10 text-blue-400"
                                    : "text-muted-foreground hover:bg-blue-500/5 hover:text-blue-400"
                                }`}
                              >
                                <motion.span
                                  className="text-base font-medium"
                                  whileHover={{ scale: 1.05 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  {link.name}
                                </motion.span>

                                {/* Enhanced underline effect */}
                                <motion.span
                                  className={`absolute -bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-400 to-blue-700 transition-all duration-300 ${
                                    isActive
                                      ? "w-full"
                                      : "w-0 group-hover:w-full"
                                  }`}
                                  initial={false}
                                  animate={{
                                    scaleX: isActive ? 1 : 0,
                                    opacity: isActive ? 1 : 0.7,
                                  }}
                                  transition={{ duration: 0.3 }}
                                />

                                {/* Hover glow effect */}
                                <motion.div
                                  className="absolute -inset-2 bg-blue-500/10 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"
                                  initial={false}
                                  animate={{
                                    scale: isActive ? 1 : 0.8,
                                  }}
                                  transition={{ duration: 0.3 }}
                                />
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <LanguageSwitcher isMobile={true} />
            <div className="text-center text-sm text-muted-foreground">
              © 2024 Berk Kaya
            </div>
          </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
