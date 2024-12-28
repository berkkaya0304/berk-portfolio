import ResumeLayout from "./ResumeLayout";
import ResumeGrid from "./ResumeGrid";

const ResumeEducation = ({ education }) => {
  return (
    <ResumeLayout title={education.title} description={education.description}>
      <ResumeGrid items={education.items} type="education" />
    </ResumeLayout>
  );
};

export default ResumeEducation; 