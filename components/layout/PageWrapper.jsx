import { motion } from "framer-motion";

const PageWrapper = ({ children, className = "" }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className={`min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ${className}`}
    >
      <div className="container mx-auto">
        {children}
      </div>
    </motion.section>
  );
};

export default PageWrapper; 