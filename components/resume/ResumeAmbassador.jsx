"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const ResumeAmbassador = () => {
  const { translations } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const programs = translations.resume.ambassadorPrograms;

  if (!programs || programs.length === 0) {
    return null;
  }

  // Calculate current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = programs.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(programs.length / itemsPerPage);

  return (
    <div className="space-y-8">
      {/* Başlık ve Açıklama */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
          {translations.resume.ambassador}
        </h2>
        <p className="text-blue-400/60">
          {translations.resume.ambassadorDescription}
        </p>
      </div>

      {/* Elçilikler Grid */}
      <div className="grid grid-cols-1 gap-6">
        {currentItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index % itemsPerPage) }}
            className="relative group"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 rounded-2xl blur-md opacity-20 group-hover:opacity-30 transition-opacity" />

            {/* Card Content */}
            <div className="relative bg-gradient-to-r from-slate-900/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
                    {item.company}
                  </h3>
                  <h4 className="text-blue-300 font-medium mt-1">
                    {item.topic}
                  </h4>
                  <span className="text-sm text-blue-300/60 mt-1 block">
                    {item.level}
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-sm text-blue-300">{item.duration}</span>
                </div>
              </div>

              <p className="text-blue-300/60 mt-4">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <Button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                variant="outline"
                className={`w-10 h-10 p-0 rounded-xl border-none transition-all duration-300 ${
                  currentPage === pageNumber
                    ? "bg-gradient-to-r from-blue-400 to-blue-700 text-white"
                    : "bg-gradient-to-r from-blue-400/10 to-blue-700/10 backdrop-blur-sm text-blue-400 hover:from-blue-400/20 hover:to-blue-700/20"
                }`}
              >
                {pageNumber}
              </Button>
            ),
          )}
        </div>
      )}
    </div>
  );
};

export default ResumeAmbassador;
