import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";

const WorkCard = ({ work }) => {
  const { translations } = useLanguage();
  const title = translations.work.works[work.titleKey.split('.')[1]][work.titleKey.split('.')[2]];
  const description = translations.work.works[work.descriptionKey.split('.')[1]][work.descriptionKey.split('.')[2]];

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      className="relative group h-full"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 rounded-2xl blur-md opacity-20 group-hover:opacity-30 transition-opacity" />
      
      {/* Card Content */}
      <div className="relative bg-gradient-to-r from-slate-900/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 h-full flex flex-col">
        {/* Project Image */}
        <div className="aspect-video relative rounded-xl overflow-hidden mb-6">
          <Image
            src={work.image}
            alt={title}
            width={640}
            height={360}
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Project Info */}
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
            {title}
          </h3>
          <p className="text-blue-300/80 text-sm mb-6">
            {description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {work.tech.map((item, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-slate-900/80 to-slate-900/80 text-blue-300 border border-blue-400/20"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {work.github && (
            <Link
              href={work.github}
              target="_blank"
              className="text-blue-400 hover:text-blue-500 transition-colors"
            >
              <FiGithub size={20} />
            </Link>
          )}
          {work.link && (
            <Link
              href={work.link}
              target="_blank"
              className="text-blue-400 hover:text-blue-500 transition-colors"
            >
              <FiExternalLink size={20} />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard; 