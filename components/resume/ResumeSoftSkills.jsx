"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SoftSkillItem = ({ skill, index }) => (
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
      <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 mb-4">
        {skill.name}
      </h3>
      
      <div className="flex items-center gap-3 mb-2">
        <span className="w-[6px] h-[6px] rounded-full bg-blue-400"></span>
        <p className="text-blue-300">Rating: {skill.rating}/100</p>
      </div>
      
      <div className="w-full bg-blue-900/20 rounded-full h-2.5 mb-4">
        <div
          className="bg-gradient-to-r from-blue-400 to-blue-700 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${skill.rating}%` }}
        ></div>
      </div>
      
      <p className="text-blue-300/60">{skill.description}</p>
    </div>
  </motion.div>
);

const ResumeSoftSkills = ({ soft = { skills: [] } }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  if (!soft?.skills || soft.skills.length === 0) {
    return null;
  }

  const totalPages = Math.ceil(soft.skills.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentSkills = soft.skills.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="space-y-8">
      {/* Başlık ve Açıklama */}
      <div className="text-center relative mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-700/20 blur-[100px] -z-10" />
        <h2 className="text-3xl font-bold mb-3 inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700">
            Soft Skills
          </span>
        </h2>
        <p className="text-blue-400/70 max-w-2xl mx-auto text-base">
          Here are my interpersonal and professional soft skills.
        </p>
      </div>

      {/* Results Button */}
      <div className="flex justify-center mb-8">
        <a
          href="https://drive.google.com/drive/folders/1uJ1czvD6T6Qjjam6DUVmogb6_n6suD8l"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-gradient-to-r from-blue-400 to-blue-700 text-white hover:from-blue-500 hover:to-blue-800 transition-all duration-300">
            Click Here For All Results (Turkish)
          </Button>
        </a>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentSkills.map((skill, index) => (
          <SoftSkillItem key={startIndex + index} skill={skill} index={index} />
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

export default ResumeSoftSkills; 