"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import {
  GB,
  PL,
  FR,
  CH,
  IT,
  DE,
  CZ,
  AT,
  SK,
  HU,
  VA,
} from "country-flag-icons/react/3x2";

const countryFlags = {
  Polonya: PL,
  Fransa: FR,
  İsviçre: CH,
  İtalya: IT,
  Almanya: DE,
  "Çek Cumhuriyeti": CZ,
  Avusturya: AT,
  Slovakya: SK,
  Macaristan: HU,
  Vatikan: VA,
  İngiltere: GB,
};

const TravelCard = ({ travel }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const FlagComponent = countryFlags[travel.country];

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full h-[400px] rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: isHovered ? springRotateX : 0,
        rotateY: isHovered ? springRotateY : 0,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

      <div className="relative h-full p-8 flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          {FlagComponent && (
            <div className="w-8 h-6 rounded-md overflow-hidden shadow-lg">
              <FlagComponent className="w-full h-full object-cover" />
            </div>
          )}
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-white">
              {travel.country}
            </span>
            <span className="text-sm text-gray-400">{travel.city}</span>
          </div>
        </div>

        <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          {travel.title}
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
          {travel.description}
        </p>

        <div className="flex items-center justify-end">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <FaCalendarAlt className="text-blue-400" />
            <span className="text-sm font-medium text-gray-300">
              {travel.date}
            </span>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default TravelCard;
