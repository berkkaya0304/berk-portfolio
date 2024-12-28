import ResumeLayout from "./ResumeLayout";
import { Button } from "@/components/ui/button";

const SoftSkillItem = ({ skill }) => (
  <li className="bg-[#232329] w-full sm:min-w-[370px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2">
    <h3 className="text-xl max-w-[370px] min-h-[35px] text-center lg:text-left">
      {skill.name}
    </h3>
    <div className="flex items-center gap-3">
      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
      <p className="max-w-[370px] text-white/60">Rating: {skill.rating}/100</p>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
      <div
        className="bg-accent h-2.5 rounded-full"
        style={{ width: `${skill.rating}%` }}
      ></div>
    </div>
    <div className="flex items-center justify-center mt-2">
      <p className="text-white/60 text-justify">{skill.description}</p>
    </div>
  </li>
);

const ResumeSoftSkills = ({ soft }) => {
  return (
    <ResumeLayout title={soft.title} description={soft.description}>
      <div className="flex justify-center">
        <a
          href="https://drive.google.com/drive/folders/1uJ1czvD6T6Qjjam6DUVmogb6_n6suD8l"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full sm:w-auto">
            Click Here For All Results (Turkish)
          </Button>
        </a>
      </div>
      <ul className="grid grid-cols-1 gap-[30px]">
        {soft.skills.map((skill, index) => (
          <SoftSkillItem key={index} skill={skill} />
        ))}
      </ul>
    </ResumeLayout>
  );
};

export default ResumeSoftSkills; 