import { motion } from "framer-motion";
import Link from "next/link";
import { FaCode, FaCloud, FaDatabase, FaDigitalTachograph } from 'react-icons/fa';

const icons = {
  "Full-Stack Development": FaCode,
  "Cloud Technologies": FaCloud,
  "Data Technologies": FaDatabase,
  "Digitalization": FaDigitalTachograph
};

const ServiceCard = ({ service }) => {
  const Icon = icons[service.title];
  
  return (
    <Link href={service.href}>
      <motion.div
        whileHover={{ y: -5, scale: 1.01 }}
        className="relative group h-full"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 rounded-2xl blur-md opacity-20 group-hover:opacity-30 transition-opacity" />
        
        {/* Card Content */}
        <div className="relative bg-gradient-to-r from-blue-400/10 to-blue-700/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 h-full flex flex-col">
          {/* Icon */}
          <div className="w-16 h-16 mb-6 flex items-center justify-center text-blue-400">
            <Icon size={40} />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-blue-400/80 text-sm mb-6 flex-grow">
            {service.description}
          </p>

          {/* Learn More Button */}
          <div className="inline-flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-500 transition-colors">
            Learn More
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard; 