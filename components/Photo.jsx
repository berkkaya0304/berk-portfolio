"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 rounded-full blur-2xl opacity-30" />

      {/* Image Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 125,
          delay: 0.1,
          duration: 0.7,
        }}
        className="relative bg-gradient-to-r from-blue-400 to-blue-700 rounded-full p-1"
      >
        <div className="bg-slate-900 rounded-full p-2">
          <Image
            src="/profile.jpg"
            alt="Berk Kaya"
            priority
            width={320}
            height={320}
            quality={95}
            className="rounded-full w-full h-full object-cover filter saturate-[1.2] contrast-[1.1]"
            sizes="(max-width: 768px) 280px, 320px"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;