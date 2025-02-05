"use client";

import { useEffect, useState } from "react";

const AnimatedTitle = ({ titles, first }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(titles[0]);

  // Başlık değişimi için useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  // Metin güncellemesi için useEffect
  useEffect(() => {
    setCurrentText(titles[currentIndex]);
  }, [currentIndex, titles]);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 text-lg sm:text-xl text-muted-foreground">
      <span>{first}</span>
      <span className="text-blue-400">{currentText}</span>
    </div>
  );
};

export default AnimatedTitle;
