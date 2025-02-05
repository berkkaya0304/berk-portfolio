"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/context/LanguageContext";

// Components
import ResumeExperience from "@/components/resume/ResumeExperience";
import ResumeEducation from "@/components/resume/ResumeEducation";
import ResumeSkills from "@/components/resume/ResumeSkills";
import ResumeSoftSkills from "@/components/resume/ResumeSoftSkills";
import ResumeCertifications from "@/components/resume/ResumeCertifications";
import ResumeVoluntarily from "@/components/resume/ResumeVoluntarily";
import ResumeAmbassador from "@/components/resume/ResumeAmbassador";
import ResumeAbout from "@/components/resume/ResumeAbout";
import ResumeReferences from "@/components/resume/ResumeReferences";

// Data
import { experience } from "@/data/resume";
import { education } from "@/data/resume";
import { skills } from "@/data/resume";
import { soft } from "@/data/resume";
import { certifications } from "@/data/resume";
import { voluntarilyWorks } from "@/data/resume";
import { ambassador } from "@/data/resume";
import { about } from "@/data/resume";
import { referencesList } from "@/data/resume";

const Resume = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { translations } = useLanguage();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredCertifications = selectedCategory
    ? certifications.filter((cert) => cert.category === selectedCategory)
    : certifications;

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
            {translations.resume.title}
          </h1>
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
              <TabsTrigger
                value="experience"
                className="w-full px-6 py-4 rounded-xl data-[state=active]:bg-gradient-to-r from-blue-400 to-blue-700 data-[state=active]:text-white transition-all duration-300"
              >
                {translations.resume.experience}
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="w-full px-6 py-4 rounded-xl data-[state=active]:bg-gradient-to-r from-blue-400 to-blue-700 data-[state=active]:text-white transition-all duration-300"
              >
                {translations.resume.education}
              </TabsTrigger>
              <TabsTrigger
                value="voluntarily"
                className="w-full px-6 py-4 rounded-xl data-[state=active]:bg-gradient-to-r from-blue-400 to-blue-700 data-[state=active]:text-white transition-all duration-300"
              >
                {translations.resume.voluntarily}
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="w-full px-6 py-4 rounded-xl data-[state=active]:bg-gradient-to-r from-blue-400 to-blue-700 data-[state=active]:text-white transition-all duration-300"
              >
                {translations.resume.skills}
              </TabsTrigger>
              <TabsTrigger
                value="soft"
                className="w-full px-6 py-4 rounded-xl data-[state=active]:bg-gradient-to-r from-blue-400 to-blue-700 data-[state=active]:text-white transition-all duration-300"
              >
                {translations.resume.softSkills}
              </TabsTrigger>
              <TabsTrigger
                value="ambassador"
                className="w-full px-6 py-4 rounded-xl data-[state=active]:bg-gradient-to-r from-blue-400 to-blue-700 data-[state=active]:text-white transition-all duration-300"
              >
                {translations.resume.ambassador}
              </TabsTrigger>
              <TabsTrigger
                value="certifications"
                className="w-full px-6 py-4 rounded-xl data-[state=active]:bg-gradient-to-r from-blue-400 to-blue-700 data-[state=active]:text-white transition-all duration-300"
              >
                {translations.resume.certifications}
              </TabsTrigger>
              <TabsTrigger
                value="about"
                className="w-full px-6 py-4 rounded-xl data-[state=active]:bg-gradient-to-r from-blue-400 to-blue-700 data-[state=active]:text-white transition-all duration-300"
              >
                {translations.about.title}
              </TabsTrigger>
              <TabsTrigger
                value="references"
                className="w-full px-6 py-4 rounded-xl data-[state=active]:bg-gradient-to-r from-blue-400 to-blue-700 data-[state=active]:text-white transition-all duration-300"
              >
                {translations.resume.references}
              </TabsTrigger>
            </TabsList>

            <div className="flex-1 min-h-[700px]">
              <TabsContent value="experience" className="h-full">
                <ResumeExperience experiences={experience} />
              </TabsContent>
              <TabsContent value="education" className="h-full">
                <ResumeEducation educations={education} />
              </TabsContent>
              <TabsContent value="voluntarily" className="h-full">
                <ResumeVoluntarily voluntarilyWorks={voluntarilyWorks} />
              </TabsContent>
              <TabsContent value="skills" className="h-full">
                <ResumeSkills skills={skills} />
              </TabsContent>
              <TabsContent value="soft" className="h-full">
                <ResumeSoftSkills soft={soft} />
              </TabsContent>
              <TabsContent value="ambassador" className="h-full">
                <ResumeAmbassador ambassador={ambassador} />
              </TabsContent>
              <TabsContent value="certifications" className="h-full">
                <ResumeCertifications
                  certifications={certifications}
                  selectedCategory={selectedCategory}
                  handleCategoryChange={handleCategoryChange}
                  filteredCertifications={filteredCertifications}
                  translations={translations}
                />
              </TabsContent>
              <TabsContent value="about" className="h-full">
                <ResumeAbout about={about} />
              </TabsContent>
              <TabsContent value="references" className="h-full">
                <ResumeReferences referencesList={referencesList} />
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;
