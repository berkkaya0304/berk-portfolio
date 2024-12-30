"use client";

import ServiceDetail from "@/components/services/ServiceDetail";
import { services } from "@/data/services";

const DigitalizationService = () => {
  const digitalizationService = services.find(service => service.title === "Digitalization");
  
  return (
    <ServiceDetail 
      title={digitalizationService.title}
      description="Embrace digital transformation with our comprehensive digitalization services. We help organizations modernize their processes, implement digital solutions, and create efficient workflows that drive productivity and innovation in the digital age."
      image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1456&h=816&q=80"
    />
  );
};

export default DigitalizationService;