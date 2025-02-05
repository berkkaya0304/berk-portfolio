"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Nav = () => {
  const pathname = usePathname();
  const { translations } = useLanguage();

  const links = [
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
    {
      name: translations.nav.portfolio,
      path: "/work",
    },
    {
      name: translations.nav.programs,
      path: "/program",
    },
    {
      name: translations.nav.social,
      path: "/social",
    },
    {
      name: translations.nav.articles,
      path: "/blog",
    },
  ];

  return (
    <div className="flex items-center gap-6">
      <nav className="flex items-center gap-6">
        {links.map((link, index) => {
          const isActive = link.path === pathname;

          return (
            <Link href={link.path} key={index} className="relative group">
              <span
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-400"
                    : "text-muted-foreground hover:text-blue-400"
                }`}
              >
                {link.name}
              </span>

              {/* Underline effect */}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-blue-700 transition-all duration-300 ${
                  isActive ? "w-full" : "group-hover:w-full"
                }`}
              />
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Nav;
