"use client";

import ServiceDetail from "@/components/services/ServiceDetail";
import { useLanguage } from "@/context/LanguageContext";

const FullstackService = () => {
  const { translations } = useLanguage();

  return (
    <ServiceDetail
      title={translations.services.fullstack.title}
      description={translations.services.fullstack.description}
      image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1456&h=816&q=80"
      loading="lazy"
      serviceKey="fullstack"
    />
  );
};

export default FullstackService;
