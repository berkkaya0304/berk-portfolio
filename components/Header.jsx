"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

//Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
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
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-200" />
                <div className="relative flex items-center">
                  <motion.h1 
                    className="text-3xl font-bold"
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 hover:to-blue-400 transition-all duration-300">
                      Berk
                    </span>
                    <span className="inline-flex items-center">
                      <span className="text-blue-400 group-hover:text-blue-500 transition-colors duration-300">.</span>
                      <span className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 -right-1 -top-1 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </span>
                  </motion.h1>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Nav & hire me button*/}
            <div className="hidden xl:flex items-center gap-8">
              <Nav />
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-400 to-blue-700 text-white hover:opacity-90">
                  Contact me!
                </Button>
              </Link>
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