"use client";

import ServiceDetail from "@/components/services/ServiceDetail";
import { services } from "@/data/services";

const FullstackService = () => {
  const fullstackService = services.find(service => service.title === "Full-Stack Development");
  
  return (
    <ServiceDetail 
      title={fullstackService.title}
      description={fullstackService.description}
      image="https://www.talentcoders.co/wp-content/uploads/2023/06/full-stack-yazilimci.png"
    />
  );
};

export default FullstackService;