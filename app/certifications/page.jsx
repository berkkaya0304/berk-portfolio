"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import { FaArrowUpFromBracket } from "react-icons/fa6";


const certifications = [
  {
    title: "Developer Associate - AI",
    issuer: "Huawei Cloud",
    date: "July 2024",
    image: "https://fs-intl-en-us.connect.huaweicloud.com/FileServer/getFile/vector/011/111/111/0000000000011111111.20240726151007.20996619988002026016639861969173:50550813202105:2800:547B88EB84C44CE67D389804E100894EB83A5B2AFE24EADDF327380BC700A279.png",
    category: "Cloud",
  },
  {
    title: "Developer Associate - Tech Essentials",
    issuer: "Huawei Cloud",
    date: "Dec 2023",
    image: "https://fs-intl-en-us.connect.huaweicloud.com/FileServer/getFile/vector/011/111/111/0000000000011111111.20231229154003.26748684713176376740678732337194:50550813202022:2800:6E4E181FEDBA518C7DFF8EC5AD985340C0E8F77F7BA05A98BA5281035C14007F.png",
    category: "Cloud",
  },
];

const Certifications = () => {

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const filteredCertifications = certifications.filter(
    (cert) => cert.category === selectedCategory
  );

  return (
    <motion.div
    initial={{opacity: 0}}
    animate= {{opacity: 1, transition: {delay: 2.4, duration:0.4,ease: "easeIn"}}}
    className="flex items-center justify-center py-12 xl:py-0 mb-10"
    >
      <div className="container mx-auto">
      <Select onValueChange={handleCategoryChange}>
      <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Topic:" />
      </SelectTrigger>
      <SelectGroup>
      <SelectContent>
                    <SelectItem value="Cloud">Cloud</SelectItem>
                    <SelectItem value="Data">Data</SelectItem>
                    <SelectItem value="Social">Social</SelectItem>
                    <SelectItem value="Mainframe">Mainframe</SelectItem>
                    <SelectItem value="Extended Reality">Extended Reality</SelectItem>
                    <SelectItem value="Software">Software</SelectItem>
                    <SelectItem value="Cyber Security">Cyber Security</SelectItem>
                    <SelectItem value="Artificial Intelligence">Artificial Intelligence</SelectItem>
                    <SelectItem value="Front-End">Front-End</SelectItem>
                    <SelectItem value="Project Management">Project Management</SelectItem>
      </SelectContent>
      </SelectGroup>
      </Select>
      {selectedCategory && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2 justify-center items-center">
              {selectedCategory} Certifications
            </h2>
            {filteredCertifications.length > 0 ? (
              <ul>
                {filteredCertifications.map((cert,index) => {

                  return (<li key={index} className="bg-[#232329] min-w-[370px]  py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:item-start mb-5 gap-2">
                      <span className="text-accent gap-[50px]">{cert.date}</span>
                      <h3 className="text-xl min-w-[370px] min-h-[35px] text-center items-center justify-center">{cert.title}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="max-w-[370px] text-white/60">{cert.issuer}</p>
                      </div>
                      {cert.image && (
                       <div className="flex items-center justify-center">
                       <a href={cert.image} target="_blank" rel="noopener noreferrer">
                       <Button><FaArrowUpFromBracket /></Button>
                       </a>
                      </div>
                       )}
                    </li>);
                  })}
              </ul>
            ) : (
              <p>No certifications found for this category.</p>
            )}
          </div>
        )}
        </div>
        </motion.div>
  );
};

export default Certifications;