import { motion } from "framer-motion";

const ResumeLayout = ({ children, title, description }) => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{title}</h3>
      {description && (
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{description}</p>
      )}
      {children}
    </div>
  );
};

export default ResumeLayout; 