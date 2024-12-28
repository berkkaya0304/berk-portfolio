import ResumeLayout from "./ResumeLayout";
import ResumeGrid from "./ResumeGrid";

const ResumeVoluntarily = ({ voluntarilyWorks }) => {
  return (
    <ResumeLayout title={voluntarilyWorks.title} description={voluntarilyWorks.description}>
      <ResumeGrid items={voluntarilyWorks.items} type="voluntarily" />
    </ResumeLayout>
  );
};

export default ResumeVoluntarily; 