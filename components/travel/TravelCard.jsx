"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";

const TravelCard = ({ travel }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

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

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full h-[500px] rounded-2xl overflow-hidden cursor-pointer"
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
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />

      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {travel.images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={`${travel.country} - ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <motion.div
        className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: isHovered ? 0 : 100, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <FaMapMarkerAlt className="text-red-500" />
          <span className="text-sm font-medium">{travel.country}</span>
        </div>
        <h3 className="text-2xl font-bold mb-2">{travel.title}</h3>
        <p className="text-sm opacity-90 mb-4">{travel.description}</p>

        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-blue-400" />
            <span className="text-sm">{travel.date}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TravelCard;
