import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

const ResumeReferences = ({ referencesList }) => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">References</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        Valuable insights about my professional competencies
      </p>
      <ScrollArea className="h-[600px]">
        <ul className="grid grid-cols-1 gap-[30px]">
          {referencesList.map((reference, index) => (
            <li
              key={index}
              className="bg-[#232329] min-w-[370px] py-6 px-10 rounded-xl flex flex-row items-center gap-6"
            >
              <div className="w-24 h-24 relative rounded-full overflow-hidden">
                <Image
                  src={reference.image}
                  alt={reference.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{reference.name}</h3>
                <p className="text-white/60 text-sm">{reference.position}</p>
                <p className="text-white/80 text-justify mt-2">{reference.testimonial}</p>
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default ResumeReferences; 