import { useState, useEffect } from 'react';

const AnimatedTitle = ( {titles, first} ) => {
  const [currentText, setCurrentText] = useState('Computer Scientist');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentText(titles[currentIndex]);
  }, [currentIndex]);

  return (
    <div className="flex items-center space-x-2">
      <span>{first}</span>
      <div className="relative">
        <div 
          key={currentText}
          className="inline-block"
          style={{
            animation: 'fadeInOut 3s infinite'
          }}
        >
          {currentText}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          20%, 80% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(10px);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedTitle;