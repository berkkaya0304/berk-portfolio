import ResumeLayout from "./ResumeLayout";

const AboutItem = ({ field }) => (
  <li className="flex flex-col items-center xl:items-start">
    <div className="text-white/60">{field.fieldName}</div>
    <div className="text-white">{field.fieldValue}</div>
  </li>
);

const ResumeAbout = ({ about }) => {
  return (
    <ResumeLayout title={about.title} description={about.description}>
      <ul className="grid grid-cols-2 xl:grid-cols-4 gap-y-4 gap-x-8">
        {about.info.map((field, index) => (
          <AboutItem key={index} field={field} />
        ))}
      </ul>
    </ResumeLayout>
  );
};

export default ResumeAbout; 