"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Nav = () => {
  const pathname = usePathname();
  const { translations } = useLanguage();

  const navCategories = [
    {
      name: translations.nav.categories.main,
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
      name: translations.nav.categories.work,
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
      name: translations.nav.categories.tools,
      items: [
        {
          name: translations.nav.personalBrand,
          path: "/personal-brand",
        },
      ],
    },
    {
      name: translations.nav.categories.social,
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
      ],
    },
  ];

  return (
    <div className="flex items-center gap-8">
      {navCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="relative group">
          <button className="flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-blue-700">
              {category.name}
            </span>
            <motion.div
              animate={{ rotate: 0 }}
              transition={{ duration: 0.2 }}
              className="group-hover:rotate-180 text-blue-400"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-current"
              >
                <path
                  d="M2.5 4.5L6 8L9.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </button>

          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-2 w-48 bg-background/80 backdrop-blur-md rounded-lg shadow-xl border border-blue-500/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
            >
              <div className="py-2">
                {category.items.map((link, index) => {
                  const isActive = link.path === pathname;

                  return (
                    <Link
                      href={link.path}
                      key={index}
                      className={`block px-4 py-2 text-sm transition-all duration-300 ${
                        isActive
                          ? "text-blue-400"
                          : "text-muted-foreground hover:text-blue-400"
                      }`}
                    >
                      <motion.span
                        className="relative flex items-center"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.name}
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-4 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"
                          />
                        )}
                      </motion.span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Nav;
