"use client";

import { motion } from "framer-motion";
import BlogCard from "@/components/blog/BlogCard";
import { getAllPosts } from "@/data/blog";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function BlogPage() {
  const posts = getAllPosts();
  const { translations } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState("all"); // 'all', 'en', 'tr'

  // Makaleleri dile göre filtrele
  const filteredPosts =
    selectedLanguage === "all"
      ? posts
      : posts.filter((post) => post.language === selectedLanguage);

  return (
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
            {translations.blog.title}
          </h1>
          <p className="text-blue-400/80 text-lg max-w-2xl mx-auto">
            {translations.blog.description}
          </p>
        </motion.div>

        {/* Dil Filtreleme */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4 mb-8"
        >
          <button
            onClick={() => setSelectedLanguage("all")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedLanguage === "all"
                ? "bg-blue-500 text-white"
                : "bg-slate-800 text-blue-400 hover:bg-slate-700"
            }`}
          >
            {translations.blog.filters.all}
          </button>
          <button
            onClick={() => setSelectedLanguage("en")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedLanguage === "en"
                ? "bg-blue-500 text-white"
                : "bg-slate-800 text-blue-400 hover:bg-slate-700"
            }`}
          >
            {translations.blog.filters.english}
          </button>
          <button
            onClick={() => setSelectedLanguage("tr")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedLanguage === "tr"
                ? "bg-blue-500 text-white"
                : "bg-slate-800 text-blue-400 hover:bg-slate-700"
            }`}
          >
            {translations.blog.filters.turkish}
          </button>
        </motion.div>

        {/* Blog Post Grid */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * (index + 1) }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
