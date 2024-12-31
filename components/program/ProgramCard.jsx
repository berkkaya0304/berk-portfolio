import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const ProgramCard = ({ program }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      className="relative group h-full"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 rounded-2xl blur-md opacity-20 group-hover:opacity-30 transition-opacity" />
      
      {/* Card Content */}
      <div className="relative bg-gradient-to-r from-blue-400/10 to-blue-700/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 h-full flex flex-col">
        {/* Header with Company Logo */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-32 h-20 relative flex-shrink-0">
            <Image
              src={program.companyLogo}
              alt={program.company}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 100vw, 128px"
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
              {program.title}
            </h3>
            <p className="text-blue-400/80 font-medium">
              {program.company}
            </p>
          </div>
        </div>

        {/* Program Info */}
        <div className="flex-grow">
          <p className="text-blue-400/60 text-sm mb-4">
            {program.description}
          </p>
        </div>

        {/* Program Details */}
        <div className="space-y-4">
          {/* Date */}
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-400/10 to-blue-700/10 text-blue-400 border border-blue-400/20">
              {program.date}
            </span>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {program.skills.map((skill, index) => (
              <span 
                key={index}
                className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-400/10 to-blue-700/10 text-blue-400 border border-blue-400/20"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Links Section */}
          <div className="flex flex-col gap-3">
            {/* LinkedIn Link */}
            {(program.photo || program.certificate?.link) && (
              <Link
                href={program.certificate?.link || program.photo}
                target="_blank"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-400/10 to-blue-700/10 text-blue-400 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300"
              >
                <span>View on LinkedIn</span>
                <FiExternalLink size={20} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgramCard; 