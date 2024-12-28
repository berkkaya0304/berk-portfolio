"use client";

import ServiceDetail from "@/components/services/ServiceDetail";
import { services } from "@/data/services";

const CloudService = () => {
  const cloudService = services.find(service => service.title === "Cloud Technologies");
  
  return (
    <ServiceDetail 
      title={cloudService.title}
      description={cloudService.description}
      image="https://media.licdn.com/dms/image/D5612AQGdJwTfkaVA9A/article-cover_image-shrink_720_1280/0/1695748849925?e=2147483647&v=beta&t=lLpyk_jq2xK54oG6T_W3rZkz-qwtNdVQsyVY8W7X1WE"
    />
  );
};

export default CloudService;