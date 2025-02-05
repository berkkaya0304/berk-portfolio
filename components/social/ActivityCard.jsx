import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";

const ActivityCard = ({ title, description, href }) => {
  const { translations } = useLanguage();

  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -5, scale: 1.01 }}
        className="relative group h-full"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 rounded-2xl blur-md opacity-20 group-hover:opacity-30 transition-opacity" />

        {/* Card Content */}
        <div className="relative bg-gradient-to-r from-slate-900/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 h-full flex flex-col">
          {/* Title */}
          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
              {title}
            </h3>
            <p className="text-blue-300/80 text-sm mb-6">{description}</p>
          </div>

          {/* Explore Button */}
          <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-slate-900/80 to-slate-900/80 text-blue-300 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
            <span>{translations.common.learnMore}</span>
            <FiArrowRight />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ActivityCard;
