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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-primary via-background to-background relative overflow-hidden py-20"
    >
      {/* Arkaplan dekoratif elementleri */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Başlık */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
            My Resume
          </h1>
          <p className="text-blue-400/80 text-lg max-w-2xl mx-auto">
            Professional background, skills, and achievements
          </p>
        </motion.div>

        {/* Tabs Container */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-7xl mx-auto bg-gradient-to-r from-blue-400/10 to-blue-700/10 backdrop-blur-sm rounded-2xl border border-blue-400/20 p-6 md:p-8"
        >
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-8 xl:gap-12"
          >
            <TabsList className="flex flex-col w-full xl:w-64 gap-2 bg-transparent">
              {[
                "experience",
                "education",
                "voluntarily",
                "skills",
                "soft",
                "ambassador",
                "Certifications",
                "about",
                "reference"
              ].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="w-full px-6 py-4 rounded-xl data-[state=active]:bg-gradient-to-r from-blue-400 to-blue-700 data-[state=active]:text-white transition-all duration-300"
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="flex-1 min-h-[600px]">
              <TabsContent value="reference" className="h-full">
                <ResumeReferences referencesList={referencesList} />
              </TabsContent>
              <TabsContent value="soft" className="h-full">
                <ResumeSoftSkills soft={soft} />
              </TabsContent>
              <TabsContent value="ambassador" className="h-full">
                <ResumeAmbassador ambassador={ambassador} />
              </TabsContent>
              <TabsContent value="Certifications" className="h-full">
                <ResumeCertifications
                  certifications={certifications}
                  selectedCategory={selectedCategory}
                  handleCategoryChange={handleCategoryChange}
                  filteredCertifications={filteredCertifications}
                />
              </TabsContent>
              <TabsContent value="experience" className="h-full">
                <ResumeExperience experience={experience} />
              </TabsContent>
              <TabsContent value="voluntarily" className="h-full">
                <ResumeVoluntarily voluntarilyWorks={voluntarilyWorks} />
              </TabsContent>
              <TabsContent value="education" className="h-full">
                <ResumeEducation education={education} />
              </TabsContent>
              <TabsContent value="skills" className="h-full">
                <ResumeSkills skills={skills} />
              </TabsContent>
              <TabsContent value="about" className="h-full">
                <ResumeAbout about={about} />
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;