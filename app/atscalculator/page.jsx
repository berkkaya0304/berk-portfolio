"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";
import { Suspense } from "react";

const ATSCalculator = dynamic(
  () => import("@/components/tools/ATSCalculator"),
  {
    loading: () => (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-blue-400">Loading ATS Calculator...</div>
      </div>
    ),
    ssr: false,
  }
);

const Tools = () => {
  const { translations } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-primary via-background to-background relative overflow-hidden py-20"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700"
          >
            {translations.tools?.title || "Tools"}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-blue-400/80 text-lg max-w-2xl mx-auto"
          >
            {translations.tools?.description ||
              "Useful tools to help you in your career journey"}
          </motion.p>
        </div>

        {/* Tools Section */}
        <div className="max-w-4xl mx-auto">
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-blue-400">Loading ATS Calculator...</div>
              </div>
            }
          >
            <ATSCalculator />
          </Suspense>
        </div>
      </div>
    </motion.section>
  );
};

export default Tools;
