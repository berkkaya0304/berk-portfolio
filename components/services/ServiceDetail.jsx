"use client";

import BackButton from "@/components/backbutton/BackButton";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

const ServiceDetail = ({ title, description, image }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mb-10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center"
        >
          <div className="grid gap-[60px]">
            <h3 className="text-5xl font-bold">{title}</h3>
            <img alt={title} src={image} />
          </div>
          <p className="text-justify max-w-[600px] text-white/60 mx-auto">
            {description}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
        >
          <BackButton onClick={handleGoBack} className={""} />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetail; 