"use client";

import ServiceDetail from "@/components/services/ServiceDetail";
import { useLanguage } from "@/context/LanguageContext";

const DataService = () => {
  const { translations } = useLanguage();

  return (
    <ServiceDetail
      title={translations.services.data.title}
      description={translations.services.data.description}
      image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1456&h=816&q=80"
      loading="lazy"
      serviceKey="data"
    />
  );
};

export default DataService;
