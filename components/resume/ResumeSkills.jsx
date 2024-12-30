"use client";

import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SkillItem = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * index }}
    className="relative group"
  >
    {/* Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 rounded-2xl blur-md opacity-20 group-hover:opacity-30 transition-opacity" />

    {/* Card Content */}
    <div className="relative bg-gradient-to-r from-slate-900/80 to-slate-900/80 backdrop-blur-sm rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 h-full">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger className="w-full h-[150px] flex justify-center items-center">
            <div className="text-6xl text-blue-300 group-hover:text-blue-400 transition-all duration-300">
              {skill.icon}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="capitalize">{skill.name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </motion.div>
);

const ResumeSkills = ({ skills = { skillList: [] } }) => {
  if (!skills?.skillList || skills.skillList.length === 0) {
    return null;
  }

  return (
    <div className="space-y-8">
      {/* Başlık ve Açıklama */}
      <div className="text-center relative mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-700/20 blur-[100px] -z-10" />
        <h2 className="text-3xl font-bold mb-3 inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700">
            Technical Skills
          </span>
        </h2>
        <p className="text-blue-400/70 max-w-2xl mx-auto text-base">
          Here are my technical skills and proficiency levels.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.skillList.map((skill, index) => (
          <SkillItem key={index} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ResumeSkills; 