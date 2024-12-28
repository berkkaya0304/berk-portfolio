"use client";

import ServiceDetail from "@/components/services/ServiceDetail";
import { services } from "@/data/services";

const DataService = () => {
  const dataService = services.find(service => service.title === "Data Technologies");
  
  return (
    <ServiceDetail 
      title={dataService.title}
      description={dataService.description}
      image="https://successive.cloud/wp-content/uploads/2022/04/Data-Analytics-Benefits-768x403.png"
    />
  );
};

export default DataService;