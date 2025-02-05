"use client";

import ServiceDetail from "@/components/services/ServiceDetail";
import { useLanguage } from "@/context/LanguageContext";

const CloudService = () => {
  const { translations } = useLanguage();

  return (
    <ServiceDetail
      title={translations.services.cloud.title}
      description={translations.services.cloud.description}
      image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1456&h=816&q=80"
      serviceKey="cloud"
    />
  );
};

export default CloudService;
