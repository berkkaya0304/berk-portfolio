"use client";

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Papa from 'papaparse';
import ActivityList from '@/components/social/ActivityList';
import { bookData, bookColumns } from '@/data/social';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    Papa.parse(bookData, {
      header: true,
      complete: (results) => {
        setBooks(results.data);
      },
    });
  }, []);

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
            Book List
          </h1>
          <p className="text-blue-400/80 text-lg max-w-2xl mx-auto">
            Books I&apos;ve read and my reading journey
          </p>
        </motion.div>

        {/* Liste */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-7xl mx-auto"
        >
          <ActivityList 
            data={books} 
            columns={bookColumns}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BookList;