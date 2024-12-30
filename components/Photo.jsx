"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative"
      >
        {/* Dış çember - Mavi gradient */}
        <motion.svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 500 500" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="250"
            cy="250"
            r="248"
            strokeWidth="2"
            strokeLinecap="round"
            className="stroke-[url(#gradient1)]"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.05, 1]
            }}
            transition={{
              rotate: {
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className="stop-color-blue-400" style={{ stopColor: '#60A5FA', stopOpacity: 0.5 }} />
              <stop offset="100%" className="stop-color-blue-600" style={{ stopColor: '#2563EB', stopOpacity: 0.5 }} />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Orta çember - Mor gradient */}
        <motion.svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 500 500" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="250"
            cy="250"
            r="230"
            strokeWidth="3"
            strokeLinecap="round"
            className="stroke-[url(#gradient2)]"
            animate={{
              rotate: [360, 0],
              scale: [1, 0.95, 1]
            }}
            transition={{
              rotate: {
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: '#4F46E5', stopOpacity: 0.5 }} />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* İç çember - Turkuaz gradient */}
        <motion.svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 500 500" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="250"
            cy="250"
            r="210"
            strokeWidth="4"
            strokeLinecap="round"
            className="stroke-[url(#gradient3)]"
            animate={{
              rotate: [0, -360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#2DD4BF', stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: '#0D9488', stopOpacity: 0.5 }} />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Fotoğraf */}
        <div className="relative z-10">
          <Image 
            src="https://i.hizliresim.com/nnnztwo.png"
            alt="Berk Kaya"
            width={500}
            height={500}
            priority
            quality={100}
            className="w-full h-full object-contain mix-blend-lighten"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;