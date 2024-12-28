import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BsCalendar } from "react-icons/bs";
import { Skeleton } from "@/components/ui/skeleton";

const ProgramCard = ({ program }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden h-full"
      style={{ aspectRatio: '3/4' }}
    >
      <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 h-[28px]">{program.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{program.description}</p>
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
    </motion.div>
  );
};

export const ProgramCardSkeleton = () => {
  return (
    <div className="bg-[#232329] rounded-xl p-6 flex flex-col gap-4 h-full">
      <Skeleton className="w-full h-[140px] rounded-lg" />
      <div className="flex flex-col gap-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-20 w-full" />
        <div className="flex gap-2">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-20" />
        </div>
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
};

export default ProgramCard; 