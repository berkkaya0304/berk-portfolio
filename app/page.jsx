"use client";

import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { IoMdTime } from "react-icons/io";

const updates = [
  {
    id: 1,
    text: "Launched new portfolio website",
    date: "March 2024"
  },
  {
    id: 2,
    text: "Started working on AI Integration project",
    date: "February 2024"
  },
  {
    id: 3,
    text: "Upcoming tech talk about modern web development",
    date: "April 2024"
  }
];

const Home = () => {
  const titles = ['Computer Scientist', 'Software Eng.', 'Computer Eng.'];
  const titles2 = ['Computer Sciences', 'Software Eng.', 'Computer Eng.'];
  const first = "AI Powered";
  const first2 = "Welcome to Future of ";

  const handleDownload = () => {
    const cvPath = '/cv/cv.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-6rem)] bg-gradient-to-b from-primary via-background to-background relative overflow-hidden flex items-center py-12 sm:py-16"
    >
      {/* Arkaplan dekoratif elementleri */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Sol Taraf - Bilgiler */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="space-y-4">
              <div className="hidden lg:block">
                <AnimatedTitle titles={titles} first={first}/>
              </div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tighter">
                Hello I&apos;m <br className="hidden sm:block"/>
                <span className="text-accent bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700">
                  Berk Kaya
                </span>
              </h1>
              
              <div className="hidden lg:block">
                <AnimatedTitle titles={titles2} first={first2}/>
              </div>
            </div>

            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-6"
            >
              <Button
                onClick={handleDownload}
                variant="outline"
                size="lg"
                className="group relative px-6 sm:px-8 py-2.5 sm:py-3 border-none bg-gradient-to-r from-blue-400/10 to-blue-700/10 hover:from-blue-400 hover:to-blue-700 backdrop-blur-sm rounded-xl transition-all duration-300 w-full sm:w-auto"
              >
                <span className="relative z-10 font-medium text-blue-400 group-hover:text-white transition-colors">
                  Download CV
                </span>
                <FiDownload className="ml-2 inline-block group-hover:translate-y-1 transition-all duration-300 text-blue-400 group-hover:text-white"/>
              </Button>
              
              <div className="flex items-center w-full sm:w-auto justify-center">
                <Social 
                  containderStyles="flex gap-4 sm:gap-6"
                  iconStyles="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-400/10 to-blue-700/10 backdrop-blur-sm rounded-xl flex justify-center items-center text-blue-400 hover:from-blue-400 hover:to-blue-700 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                />
              </div>
            </motion.div>

            {/* Last Updates */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 rounded-xl blur-md opacity-10" />
              <div className="relative bg-gradient-to-r from-blue-400/5 to-blue-700/5 backdrop-blur-sm p-4 rounded-xl border border-blue-400/10">
                <div className="flex items-center gap-2 mb-3">
                  <IoMdTime className="text-xl text-blue-400" />
                  <h3 className="text-lg font-semibold text-blue-400">Last Updates</h3>
                </div>
                <div className="space-y-2">
                  {updates.map((update) => (
                    <motion.div
                      key={update.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + update.id * 0.1 }}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 group/item hover:bg-blue-400/10 p-2 rounded-lg transition-all duration-300"
                    >
                      <span className="text-sm text-blue-400/80 group-hover/item:text-blue-400 line-clamp-2 sm:line-clamp-1">{update.text}</span>
                      <span className="text-xs text-blue-400/60 group-hover/item:text-blue-400/80 whitespace-nowrap">{update.date}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Sağ Taraf - Sadece Fotoğraf */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative order-1 lg:order-2 mt-4 lg:mt-0 flex justify-center lg:justify-end"
          >
            {/* Fotoğraf bölümü */}
            <div className="relative w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
              {/* Fotoğraf container */}
              <div className="relative z-10 w-full h-full">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-full h-full"
                >
                  <Photo />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats kartları - 4 sütun */}
        <div className="w-full px-0 lg:px-0 mt-12 lg:mt-16">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full"
          >
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 rounded-xl blur-md opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-gradient-to-r from-blue-400/10 to-blue-700/10 backdrop-blur-sm p-2 sm:p-3 rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
                  2+
                </div>
                <div className="text-xs sm:text-sm text-blue-400/80 font-medium">
                  Years of Experience
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 rounded-xl blur-md opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-gradient-to-r from-blue-400/10 to-blue-700/10 backdrop-blur-sm p-2 sm:p-3 rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
                  20+
                </div>
                <div className="text-xs sm:text-sm text-blue-400/80 font-medium">
                  Projects Completed
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 rounded-xl blur-md opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-gradient-to-r from-blue-400/10 to-blue-700/10 backdrop-blur-sm p-2 sm:p-3 rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
                  20+
                </div>
                <div className="text-xs sm:text-sm text-blue-400/80 font-medium">
                  Technology Used
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 rounded-xl blur-md opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-gradient-to-r from-blue-400/10 to-blue-700/10 backdrop-blur-sm p-2 sm:p-3 rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
                  2+
                </div>
                <div className="text-xs sm:text-sm text-blue-400/80 font-medium">
                  Awards Won
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;