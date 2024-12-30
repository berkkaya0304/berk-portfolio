"use client";

import ServiceDetail from "@/components/services/ServiceDetail";
import { services } from "@/data/services";

const DataService = () => {
  const dataService = services.find(service => service.title === "Data Technologies");
  
  return (
    <ServiceDetail 
      title={dataService.title}
      description="Transform your raw data into actionable insights with our comprehensive data technology solutions. We specialize in data analysis, processing, and visualization to help you make informed decisions and drive business growth through data-driven strategies."
      image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1456&h=816&q=80"
    />
  );
};

export default DataService;