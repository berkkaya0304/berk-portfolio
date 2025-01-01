'use client';

import { useLanguage } from "@/context/LanguageContext";

export const getServices = () => {
  const { translations } = useLanguage();

  return [
    {
      title: translations.services.fullstack.title,
      description: translations.services.fullstack.description,
      href: "/services/fullstack",
      icon: "/icons/fullstack.png",
    },
    {
      title: translations.services.cloud.title,
      description: translations.services.cloud.description,
      href: "/services/cloud",
      icon: "/icons/cloud.png",
    },
    {
      title: translations.services.data.title,
      description: translations.services.data.description,
      href: "/services/data",
      icon: "/icons/data.png",
    },
    {
      title: translations.services.digitalization.title,
      description: translations.services.digitalization.description,
      href: "/services/digitalization",
      icon: "/icons/digital.png",
    }
  ];
}; 