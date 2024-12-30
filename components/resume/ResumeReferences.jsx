"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ReferenceItem = ({ reference, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * index }}
    className="relative group max-w-4xl mx-auto"
  >
    {/* Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 rounded-2xl blur-md opacity-20 group-hover:opacity-30 transition-opacity" />

    {/* Card Content */}
    <div className="relative bg-gradient-to-r from-slate-900/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400/20">
          <Image
            src={reference.image}
            alt={reference.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 mb-2">
            {reference.name}
          </h3>
          <p className="text-blue-300 mb-4">{reference.position}</p>
          <blockquote className="text-blue-300/80 italic">
            "{reference.testimonial}"
          </blockquote>
        </div>
      </div>
    </div>
  </motion.div>
);

const ResumeReferences = ({ referencesList = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  if (!referencesList || referencesList.length === 0) {
    return null;
  }

  const totalPages = Math.ceil(referencesList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentReferences = referencesList.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="space-y-8">
      {/* Başlık ve Açıklama */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
          References
        </h2>
        <p className="text-blue-400/60 max-w-3xl mx-auto mb-6">
          Professional references from my academic and professional journey.
        </p>
        <a
          href="https://www.linkedin.com/in/berkkaya0304/details/recommendations/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button className="bg-gradient-to-r from-blue-400 to-blue-700 text-white hover:from-blue-500 hover:to-blue-800 transition-all duration-300">
            View All References on LinkedIn
          </Button>
        </a>
      </div>

      {/* References Display */}
      <div className="space-y-6 min-h-[400px]">
        {currentReferences.map((reference, index) => (
          <ReferenceItem
            key={startIndex + index}
            reference={reference}
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

export default ResumeReferences; 