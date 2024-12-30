"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CertificationItem = ({ certification, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * index }}
    className="relative group"
  >
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
            View Certificate
          </Button>
        </a>
      )}
    </div>
  </motion.div>
);

const ResumeCertifications = ({
  certifications = [],
  selectedCategory,
  handleCategoryChange,
  filteredCertifications,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  if (!certifications || certifications.length === 0) {
    return null;
  }

  const categories = ["All", ...new Set(certifications.map((cert) => cert.category))];
  const totalPages = Math.ceil(filteredCertifications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCertifications = filteredCertifications.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleCategorySelect = (value) => {
    handleCategoryChange(value === "All" ? "" : value);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-8">
      {/* Başlık ve Açıklama */}
      <div className="text-center relative mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-700/20 blur-[100px] -z-10" />
        <h2 className="text-3xl font-bold mb-3 inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700">
            My Certifications
          </span>
        </h2>
        <p className="text-blue-400/70 max-w-2xl mx-auto text-base">
          Here are my certifications from various institutions and platforms.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center mb-8">
        <Select onValueChange={handleCategorySelect} defaultValue={selectedCategory || "All"}>
          <SelectTrigger className="w-[280px] bg-gradient-to-r from-slate-900/80 to-slate-900/80 backdrop-blur-sm border-blue-400/20">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent className="bg-gradient-to-r from-slate-900/80 to-slate-900/80 backdrop-blur-sm border-blue-400/20">
            {categories.map((category) => (
              <SelectItem key={category} value={category} className="hover:bg-blue-400/10">
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCertifications.map((certification, index) => (
          <CertificationItem
            key={startIndex + index}
            certification={certification}
            index={index}
          />
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
        </div>
      )}
    </div>
  );
};

export default ResumeCertifications; 