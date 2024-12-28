import ResumeLayout from "./ResumeLayout";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FaArrowUpFromBracket } from "react-icons/fa6";

const CertificationItem = ({ cert }) => (
  <li className="bg-[#232329] min-w-[370px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:item-start mb-5 gap-2">
    <span className="text-accent gap-[50px]">{cert.date}</span>
    <h3 className="text-xl min-w-[370px] min-h-[35px] text-center items-center justify-center">
      {cert.title}
    </h3>
    <div className="flex items-center gap-3">
      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
      <p className="max-w-[370px] text-white/60">{cert.issuer}</p>
    </div>
    {cert.image && (
      <div className="flex items-center justify-center">
        <a href={cert.image} target="_blank" rel="noopener noreferrer">
          <Button><FaArrowUpFromBracket /></Button>
        </a>
      </div>
    )}
  </li>
);

const ResumeCertifications = ({ certifications, selectedCategory, handleCategoryChange, filteredCertifications }) => {
  return (
    <ResumeLayout>
      <Select onValueChange={handleCategoryChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a Topic:" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select a Topic!</SelectLabel>
            <SelectItem value="Technology">Technology</SelectItem>
            <SelectItem value="Cloud">Cloud</SelectItem>
            <SelectItem value="Data">Data</SelectItem>
            <SelectItem value="Social">Social</SelectItem>
            <SelectItem value="Mainframe">Mainframe</SelectItem>
            <SelectItem value="Extended Reality">Extended Reality</SelectItem>
            <SelectItem value="Software">Software</SelectItem>
            <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
            <SelectItem value="Artificial Intelligence">Artificial Intelligence</SelectItem>
            <SelectItem value="Front-End">Front-End</SelectItem>
            <SelectItem value="Project Management">Project Management</SelectItem>
            <SelectItem value="Art & Culture">Art & Culture</SelectItem>
            <SelectItem value="Blockchain">Blockchain</SelectItem>
            <SelectItem value="DevOps">DevOps</SelectItem>
            <SelectItem value="Science">Science</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {selectedCategory && (
        <div className="mt-4">
          {filteredCertifications.length > 0 ? (
            <ul>
              {filteredCertifications.map((cert, index) => (
                <CertificationItem key={index} cert={cert} />
              ))}
            </ul>
          ) : (
            <p>No certifications found for this category.</p>
          )}
        </div>
      )}
    </ResumeLayout>
  );
};

export default ResumeCertifications; 