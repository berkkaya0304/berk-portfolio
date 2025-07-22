"use client";

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Papa from 'papaparse';
import ActivityList from '@/components/social/ActivityList';
import { movieData, movieColumns } from '@/data/social';
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const { translations } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    Papa.parse(movieData, {
      header: true,
      complete: (results) => {
        setMovies(results.data);
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
          <div className="flex items-center mb-6">
            <Button 
              variant="outline" 
              onClick={() => router.push('/social')}
              className="text-blue-400 border-blue-400/20 hover:bg-blue-400/5"
            >
              {translations.common.back}
            </Button>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
            {translations.social.movies.title}
          </h1>
          <p className="text-lg text-blue-400/80 max-w-2xl mx-auto">
            {translations.social.movies.description}
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <div className="flex flex-col items-center p-4 bg-slate-900/50 rounded-xl border border-blue-400/20">
              <span className="text-2xl font-bold text-blue-400">{movies.length}</span>
              <span className="text-sm text-blue-300/80">{translations.social.movies.totalMovies}</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-slate-900/50 rounded-xl border border-blue-400/20">
              <span className="text-2xl font-bold text-blue-400">
                {movies.reduce((total, movie) => total + parseInt(movie["Duration (min)"] || 0), 0)} dk
              </span>
              <span className="text-sm text-blue-300/80">{translations.social.movies.totalDuration}</span>
            </div>
          </div>
        </motion.div>

        {/* Liste */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-7xl mx-auto bg-slate-900/50 backdrop-blur-sm rounded-xl border border-blue-400/20 p-6"
        >
          <ActivityList 
            data={movies} 
            columns={movieColumns}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MovieList;