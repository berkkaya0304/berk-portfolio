import ResumeLayout from "./ResumeLayout";
import ResumeGrid from "./ResumeGrid";

const ResumeExperience = ({ experience }) => {
  return (
    <ResumeLayout title={experience.title} description={experience.description}>
      <ResumeGrid items={experience.items} type="experience" />
    </ResumeLayout>
  );
};

export default ResumeExperience; 