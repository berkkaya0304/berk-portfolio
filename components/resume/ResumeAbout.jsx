"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const AboutItem = ({ field, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * index }}
    className="relative group"
  >
    {/* Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 rounded-2xl blur-md opacity-20 group-hover:opacity-30 transition-opacity" />

    {/* Card Content */}
    <div className="relative bg-gradient-to-r from-slate-900/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 h-full">
      <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 mb-2">
        {field.fieldName}
      </h3>
      {field.fieldName === "Email" ? (
        <a
          href={`mailto:${field.fieldValue}`}
          className="text-blue-300 break-words text-sm hover:text-blue-400 transition-colors"
        >
          {field.fieldValue}
        </a>
      ) : (
        <p className="text-blue-300 break-words text-sm">{field.fieldValue}</p>
      )}
    </div>
  </motion.div>
);

const ResumeAbout = () => {
  const { translations } = useLanguage();
  const info = translations.about.info;

  if (!info || info.length === 0) {
    return null;
  }

  return (
    <div className="space-y-8">
      {/* Başlık ve Açıklama */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
          {translations.about.title}
        </h2>
        <p className="text-blue-400/60 max-w-3xl mx-auto">
          {translations.about.description}
        </p>
      </div>

      {/* About Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {info.map((field, index) => (
          <AboutItem key={index} field={field} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ResumeAbout;
