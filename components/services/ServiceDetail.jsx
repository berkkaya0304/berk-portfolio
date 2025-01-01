"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import { useLanguage } from "@/context/LanguageContext";

const ServiceDetail = ({ title, description, image, serviceKey }) => {
  const { translations } = useLanguage();

  const getFeatures = () => {
    switch(serviceKey) {
      case 'fullstack':
        return translations.services.fullstack.features;
      case 'cloud':
        return translations.services.cloud.features;
      case 'data':
        return translations.services.data.features;
      case 'digitalization':
        return translations.services.digitalization.features;
      default:
        return [];
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-primary via-background to-background relative overflow-hidden py-20"
    >
      <BackButton />
      
      {/* Arkaplan dekoratif elementleri */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Başlık */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
              {title}
            </h1>
          </motion.div>

          {/* İçerik Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sol taraf - Resim */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 rounded-2xl blur-md opacity-20" />
              <div className="relative bg-gradient-to-r from-blue-400/10 to-blue-700/10 backdrop-blur-sm p-4 rounded-2xl border border-blue-400/20">
                <div className="aspect-video relative rounded-xl overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    width={1456}
                    height={816}
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Sağ taraf - Açıklama */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 rounded-2xl blur-md opacity-20" />
              <div className="relative bg-gradient-to-r from-blue-400/10 to-blue-700/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/20 h-full">
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-blue-400/80 leading-relaxed">
                    {description}
                  </p>
                  
                  {/* Özellikler Listesi */}
                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
                      {translations.common.keyFeatures}
                    </h3>
                    <ul className="space-y-3">
                      {getFeatures().map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="flex items-center text-blue-400/80"
                        >
                          <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceDetail; 