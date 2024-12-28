"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  about,
  experience,
  voluntarilyWorks,
  education,
  soft,
  ambassador,
  skills,
  referencesList,
  certifications
} from "@/data/resume";

import {
  ResumeAbout,
  ResumeEducation,
  ResumeSkills,
  ResumeVoluntarily,
  ResumeExperience,
  ResumeAmbassador,
  ResumeCertifications,
  ResumeSoftSkills,
  ResumeReferences
} from "@/components/resume";

const Resume = () => {
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
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto mb-10">
        <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px] xl:h-[650px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="voluntarily">Voluntarily Works</TabsTrigger>
            <TabsTrigger value="skills">Technical Skills</TabsTrigger>
            <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            <TabsTrigger value="ambassador">Ambassador</TabsTrigger>
            <TabsTrigger value="Certifications">Certifications</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="reference">References</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
          <TabsContent value="reference" className="w-full">
            <ResumeReferences referencesList={referencesList} />
    </TabsContent>
          <TabsContent value="soft" className="w-full text-center">
            <ResumeSoftSkills soft={soft} />
             </TabsContent>
          <TabsContent value="ambassador" className="w-full">
              <ResumeAmbassador ambassador={ambassador} />
             </TabsContent>
             <TabsContent value="Certifications" className="w-full text-center xl:text-justify">
             <ResumeCertifications 
               certifications={certifications}
               selectedCategory={selectedCategory}
               handleCategoryChange={handleCategoryChange}
               filteredCertifications={filteredCertifications}
             />
             </TabsContent>
             <TabsContent value="experience" className="w-full">
               <ResumeExperience experience={experience} />
             </TabsContent>
             <TabsContent value="voluntarily" className="w-full">
               <ResumeVoluntarily voluntarilyWorks={voluntarilyWorks} />
             </TabsContent>
             <TabsContent value="education" className="w-full">
             <ResumeEducation education={education} />
             </TabsContent>
             <TabsContent value="skills" className="w-full text-center xl:text-justify">
               <ResumeSkills skills={skills} />
             </TabsContent>
             <TabsContent value="about" className="w-full text-center xl:text-justify">
                <ResumeAbout about={about} />
             </TabsContent>
          </div>
        </Tabs>
      </div>

    </motion.div>
  )
}

export default Resume