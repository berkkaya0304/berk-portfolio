"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const CertificationCard = ({ certification }) => {
  const { translations } = useLanguage();

  return (
    <motion.div className="relative group">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 rounded-2xl blur-md opacity-20 group-hover:opacity-30 transition-opacity" />

      {/* Card Content */}
      <div className="relative bg-gradient-to-r from-slate-900/80 to-slate-900/80 backdrop-blur-sm p-4 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 h-full">
        <h3 className="text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 mb-2">
          {certification.title}
        </h3>

        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-[4px] h-[4px] rounded-full bg-blue-400"></span>
          <p className="text-blue-300 text-sm">{certification.issuer}</p>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <span className="w-[4px] h-[4px] rounded-full bg-blue-400"></span>
          <p className="text-blue-300 text-sm">{certification.date}</p>
        </div>

        {certification.image && (
          <a
            href={certification.image}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="sm"
              variant="outline"
              className="text-[10px] px-2 py-1 h-7 bg-gradient-to-r from-blue-400 to-blue-700 text-white hover:from-blue-500 hover:to-blue-800 transition-all duration-300"
            >
              {translations.resume.viewCertificate}
            </Button>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default CertificationCard;
