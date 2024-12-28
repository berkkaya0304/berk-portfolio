"use client";

import ServiceDetail from "@/components/services/ServiceDetail";
import { services } from "@/data/services";

const DigitalizationService = () => {
  const digitalizationService = services.find(service => service.title === "Digitalization");
  
  return (
    <ServiceDetail 
      title={digitalizationService.title}
      description={digitalizationService.description}
      image="https://gl-m.linker-cdn.net/article/2020/Nov/f049b83052928038eac9e779bb8a0660.png"
    />
  );
};

export default DigitalizationService;