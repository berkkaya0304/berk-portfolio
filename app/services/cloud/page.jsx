"use client";

import ServiceDetail from "@/components/services/ServiceDetail";
import { services } from "@/data/services";

const CloudService = () => {
  const cloudService = services.find(service => service.title === "Cloud Technologies");
  
  return (
    <ServiceDetail 
      title={cloudService.title}
      description="Our cloud technology solutions help businesses leverage the power of cloud computing for enhanced scalability, security, and efficiency. We provide comprehensive cloud services including infrastructure setup, migration, optimization, and management across major cloud platforms."
      image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1456&h=816&q=80"
    />
  );
};

export default CloudService;