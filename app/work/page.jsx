"use client";

import { motion, AnimatePresence } from "framer-motion";
import WorkCard from "@/components/work/WorkCard";
import { works } from "@/data/works";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredWorks = selectedCategory === "all"
    ? works
    : works.filter(work => work.category === selectedCategory);

  const categories = ["all", ...new Set(works.map(work => work.category))];

  return (
    <AnimatePresence mode="wait">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-b from-primary via-background to-background relative overflow-hidden py-20"
      >
        {/* Arkaplan dekoratif elementleri */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700/20 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Başlık */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
              My Projects
            </h1>
            <p className="text-blue-400/80 text-lg max-w-2xl mx-auto">
              A showcase of my latest work and projects
            </p>
          </motion.div>

          {/* Kategori Filtreleme */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => handleCategoryChange(category)}
                variant="outline"
                className={`px-6 py-3 rounded-xl border-none transition-all duration-300 ${
                  selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-400 to-blue-700 text-white'
                  : 'bg-gradient-to-r from-blue-400/10 to-blue-700/10 backdrop-blur-sm text-blue-400 hover:from-blue-400/20 hover:to-blue-700/20'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </motion.div>

          {/* Projeler Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredWorks.map((work) => (
                <motion.div
                  layout
                  key={work.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <WorkCard work={work} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Work;