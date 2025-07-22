"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const SocialPage = () => {
  const { translations } = useLanguage();

  const activities = [
    {
      title: translations.social.books.title,
      description: translations.social.books.description,
      link: "/social/book",
      icon: "📚"
    },
    {
      title: translations.social.movies.title,
      description: translations.social.movies.description,
      link: "/social/movies",
      icon: "🎬"
    },
    {
      title: translations.social.theaters.title,
      description: translations.social.theaters.description,
      link: "/social/theaters",
      icon: "🎭"
    }
  ];

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
            {translations.social.title}
          </h1>
          <p className="text-lg text-blue-400/80 max-w-2xl mx-auto">
            {translations.social.description}
          </p>
        </motion.div>

        {/* Aktivite Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Link href={activity.link}>
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20 hover:border-blue-400/40 transition-colors group cursor-pointer h-full">
                  <div className="text-4xl mb-4">{activity.icon}</div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-blue-300/80">
                    {activity.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SocialPage;
