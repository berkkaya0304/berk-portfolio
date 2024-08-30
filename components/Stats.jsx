"use client";

import React from "react";
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';


const today = new Date();

const stats = [
  {
    num: today.getFullYear() - 2003,
    text: "Years Old",
    icon: "🎂"
  },
  {
    num: 12,
    text: "Projects Completed",
    icon: "🚀"
  },
  {
    num: 10,
    text: "Technologies Used",
    icon: "💻"
  },
  {
    num: 225,
    text: "Code Commits",
    icon: "📊"
  },
];

const AnimatedNumber = ({ value }) => {
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start > end) start = end;
      setDisplayValue(Math.floor(start));
      if (start === end) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{displayValue}</span>;
};

const Stats = () => {
  return (
    <section className="mb-5">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-color border-none transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl font-extrabold text-white mb-2">
                    <AnimatedNumber value={item.num} />
                  </div>
                  <p className="text-lg text-white/80">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats