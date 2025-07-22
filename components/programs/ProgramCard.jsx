import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
        {/* Program Image */}
        <div className="aspect-video relative rounded-xl overflow-hidden mb-6">
          <Image
            src={program.image}
            alt={program.title}
            width={640}
            height={360}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Program Info */}
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
            {program.title}
          </h3>
          <p className="text-blue-400/80 text-sm mb-6">{program.description}</p>
        </div>

        {/* Program Details */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-400/10 to-blue-700/10 text-blue-400 border border-blue-400/20">
              {program.date}
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-400/10 to-blue-700/10 text-blue-400 border border-blue-400/20">
              {program.category}
            </span>
          </div>
        </div>

        {/* Link */}
        {program.link && (
          <div className="flex gap-4">
            <Link
              href={program.link}
              target="_blank"
              className="text-blue-400 hover:text-blue-500 transition-colors"
            >
              <FiExternalLink size={20} />
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProgramCard;
