"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TravelCard from "@/components/travel/TravelCard";
import { useTranslations } from "@/context/TranslationsContext";
import { FaGlobe, FaSearch } from "react-icons/fa";

const TravelPage = () => {
  const { translations } = useTranslations();
  const [filteredTravels, setFilteredTravels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Seyahat verileri
  const travels = useMemo(
    () => [
      {
        id: 1,
        title: "X",
        country: "Polonya",
        city: "X",
        description: "X",
        date: "Haziran 2024",
      },
      {
        id: 2,
        title: "X",
        country: "Fransa",
        city: "X",
        description: "X",
        date: "Temmuz 2024",
      },
      {
        id: 3,
        title: "X",
        country: "İsviçre",
        city: "X",
        description: "X",
        date: "Ağustos 2024",
      },
      {
        id: 4,
        title: "X",
        country: "İtalya",
        city: "X",
        description: "X",
        date: "Eylül 2024",
      },
      {
        id: 5,
        title: "X",
        country: "Almanya",
        city: "X",
        description: "X",
        date: "Ekim 2024",
      },
      {
        id: 6,
        title: "X",
        country: "Çek Cumhuriyeti",
        city: "X",
        description: "X",
        date: "Kasım 2024",
      },
      {
        id: 7,
        title: "X",
        country: "Avusturya",
        city: "X",
        description: "X",
        date: "Aralık 2024",
      },
      {
        id: 8,
        title: "X",
        country: "Slovakya",
        city: "X",
        description: "X",
        date: "Ocak 2025",
      },
      {
        id: 9,
        title: "X",
        country: "Macaristan",
        city: "X",
        description: "X",
        date: "Şubat 2025",
      },
      {
        id: 10,
        title: "X",
        country: "Vatikan",
        city: "X",
        description: "X",
        date: "Mart 2025",
      },
    ],
    []
  );

  useEffect(() => {
    // Simüle edilmiş yükleme süresi
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const filteredTravels = travels.filter(
      (travel) =>
        travel.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        travel.country.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTravels(filteredTravels);
  }, [searchTerm, travels]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-6"
          >
            <FaGlobe className="text-6xl text-blue-500" />
          </motion.div>
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            {translations.travel?.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {translations.travel?.description}
          </p>
        </motion.div>

        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex justify-center">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder={
                  translations.travel?.searchPlaceholder ||
                  "Search destinations..."
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white/10 backdrop-blur-sm rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </motion.div>

        {/* Travel Cards Grid */}
        <AnimatePresence>
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center h-64"
            >
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredTravels.length > 0 ? (
                filteredTravels.map((travel) => (
                  <motion.div
                    key={travel.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TravelCard travel={travel} />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-12"
                >
                  <p className="text-xl text-gray-400">
                    {translations.travel?.noTravels}
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TravelPage;
