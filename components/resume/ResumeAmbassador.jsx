import ResumeLayout from "./ResumeLayout";
import ResumeGrid from "./ResumeGrid";

const ResumeAmbassador = ({ ambassador }) => {
  return (
    <ResumeLayout title={ambassador.title} description={ambassador.description}>
      <ResumeGrid items={ambassador.items} type="ambassador" columns="grid-cols-1" />
    </ResumeLayout>
  );
};

export default ResumeAmbassador; 