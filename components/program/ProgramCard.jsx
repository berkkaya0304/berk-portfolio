import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BsCalendar } from "react-icons/bs";

const ProgramCard = ({ program }) => {
  return (
    <div className="bg-[#232329] rounded-xl p-6 flex flex-col gap-4 h-full">
      <div className="relative w-full h-[140px] rounded-lg overflow-hidden bg-white/5">
        <Image
          src={program.companyLogo}
          alt={program.company}
          fill
          className="object-contain p-4"
        />
      </div>

      <div className="flex flex-col gap-4 flex-grow">
        <div>
          <h3 className="text-2xl font-bold mb-1">{program.title}</h3>
          <p className="text-accent font-medium">{program.company}</p>
        </div>

        <div className="flex items-center gap-2 text-white/60">
          <BsCalendar className="w-4 h-4" />
          <span className="text-sm">{program.date}</span>
        </div>

        <p className="text-white/60 text-sm flex-grow">{program.description}</p>

        <div className="flex flex-wrap gap-2">
          {program.skills.map((skill, index) => (
            <span 
              key={index} 
              className="text-xs font-medium bg-accent/10 text-accent px-2.5 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        {program.certificate?.link && (
          <div className="mt-2">
            <Link href={program.certificate.link} target="_blank" className="w-full">
              <Button className="w-full bg-accent hover:bg-accent/90">
                View Details
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramCard; 