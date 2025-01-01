"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ResumeEducation = ({ educations = { items: [] } }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Mevcut sayfadaki eğitimleri al
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = educations.items.slice(indexOfFirstItem, indexOfLastItem);

  // Toplam sayfa sayısını hesapla
  const totalPages = Math.ceil(educations.items.length / itemsPerPage);

  // Sayfa değiştirme fonksiyonu
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (!educations?.items || educations.items.length === 0) {
    return null;
  }

  return (
    <div className="space-y-8">
      {/* Başlık ve Açıklama */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
          {educations.title}
        </h2>
        <p className="text-blue-400/60">{educations.description}</p>
      </div>

      {/* Eğitimler Grid */}
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
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
                    {item.institution}
                  </h3>
                  <h4 className="text-blue-300 font-medium mt-1">{item.degree}</h4>
                </div>
                <span className="text-sm text-blue-300">{item.duration}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <Button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-10 h-10 rounded-xl ${
                  currentPage === pageNum
                    ? "bg-gradient-to-r from-blue-400 to-blue-700 text-white"
                    : "bg-blue-400/10 text-blue-400 hover:bg-blue-400/20"
                } transition-all duration-300`}
              >
                {pageNum}
              </Button>
            ))}
          </div>

          {totalPages > 4 && (
            <div className="flex items-center gap-2">
              <Button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-xl bg-blue-400/10 text-blue-400 hover:bg-blue-400/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ←
              </Button>
              <Button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-xl bg-blue-400/10 text-blue-400 hover:bg-blue-400/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                →
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResumeEducation; 