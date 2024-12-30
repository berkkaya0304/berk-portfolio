"use client";

import ServiceDetail from "@/components/services/ServiceDetail";
import { services } from "@/data/services";

const FullstackService = () => {
  const fullstackService = services.find(service => service.title === "Full-Stack Development");
  
  return (
    <ServiceDetail 
      title={fullstackService.title}
      description="Full-Stack Development encompasses the entire web application development process, from user interface design to server-side logic. Using modern technologies and best practices, we create scalable, efficient, and maintainable applications that meet your business needs. Our approach combines frontend excellence with robust backend solutions to deliver seamless user experiences."
      image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1456&h=816&q=80"
    />
  );
};

export default FullstackService;