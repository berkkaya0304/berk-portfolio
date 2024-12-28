import ResumeLayout from "./ResumeLayout";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SkillItem = ({ skill }) => (
  <li>
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
          <div className="text-6xl group-hover:text-accent transition-all duration-300">
            {skill.icon}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="capitalize">{skill.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </li>
);

const ResumeSkills = ({ skills }) => {
  return (
    <ResumeLayout title={skills.title} description={skills.description}>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-[30px]">
        {skills.skillList.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </ul>
    </ResumeLayout>
  );
};

export default ResumeSkills; 