"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const PageTransition = () => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathName}
        className="fixed inset-0 z-50"
        initial={{ x: "100%" }}
        animate={{
          x: "-100%",
          transition: {
            duration: 0.7,
            ease: [0.32, 0, 0.67, 0],
          },
        }}
        exit={{
          x: "-100%",
          transition: {
            duration: 0.7,
            ease: [0.32, 0, 0.67, 0],
          },
        }}
      >
        <div className="w-full h-full bg-gradient-to-l from-blue-400 via-blue-500 to-blue-600 opacity-90" />
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
