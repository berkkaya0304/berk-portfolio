import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const ActivityCard = ({ title, description, href }) => {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -5, scale: 1.01 }}
        className="relative group h-full"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 rounded-2xl blur-md opacity-20 group-hover:opacity-30 transition-opacity" />
        
        {/* Card Content */}
        <div className="relative bg-gradient-to-r from-blue-400/10 to-blue-700/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 h-full">
          <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
            {title}
          </h3>
          <p className="text-blue-400/80 text-sm mb-4">
            {description}
          </p>
          <div className="flex items-center text-blue-400 group-hover:text-blue-500 transition-colors">
            <span className="mr-2">Explore</span>
            <FiArrowRight />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ActivityCard; 