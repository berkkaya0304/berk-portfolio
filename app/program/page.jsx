"use client";

import { motion } from "framer-motion";
import ProgramCard from "@/components/program/ProgramCard";
import { programs } from "@/data/program";

const Program = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] w-full flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10 h-[48px]">
          Ambassador Programs
        </h1>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ minHeight: '400px' }}
        >
          {programs.map((program, index) => (
            <ProgramCard 
              key={index} 
              program={program}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: 0.1 * index,
                  duration: 0.4
                }
              }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Program;
