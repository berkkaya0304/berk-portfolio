"use client";

import ServiceDetail from "@/components/services/ServiceDetail";
import { useLanguage } from "@/context/LanguageContext";

const DigitalizationService = () => {
  const { translations } = useLanguage();

  return (
    <ServiceDetail
      title={translations.services.digitalization.title}
      description={translations.services.digitalization.description}
      image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1456&h=816&q=80"
      serviceKey="digitalization"
    />
  );
};

export default DigitalizationService;
