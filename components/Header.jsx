"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

//Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { translations } = useLanguage();

  return (
    <>
      <div className="h-24" /> {/* Spacer for fixed header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg"
      >
        <div className="container mx-auto py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Subtle glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Logo container */}
                <div className="relative px-1">
                  <motion.h1 className="text-2xl font-light tracking-wide">
                    <motion.span className="inline-flex items-center space-x-2">
                      <span className="font-normal bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                        Berk
                      </span>
                      <span className="font-light text-blue-500">Kaya</span>
                    </motion.span>

                    {/* Subtle hover line */}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                      initial={false}
                      animate={{
                        scaleX: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.h1>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Nav & hire me button*/}
            <div className="hidden xl:flex items-center gap-8">
              <Nav />
              <div className="flex items-center gap-4">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-blue-400 to-blue-700 text-white hover:opacity-90">
                    {translations.contact.contactMe}
                  </Button>
                </Link>
                <LanguageSwitcher />
              </div>
            </div>

            {/* Mobile Nav*/}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
