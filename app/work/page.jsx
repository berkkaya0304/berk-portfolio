"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import WorkTabs from "@/components/work/WorkTabs";
import { projectsFrontend, projectsDigital, projectsData, projectsCloud } from "@/data/projects";
import { register } from 'swiper/element/bundle';

register();

const Work = () => {
  const [projectDigital, setProjectDigital] = useState(projectsDigital[0]);
  const [projectFrontend, setProjectFrontend] = useState(projectsFrontend[0]);
  const [projectData, setProjectData] = useState(projectsData[0]);
  const [projectCloud, setProjectCloud] = useState(projectsCloud[0]);

  return (
    <motion.section 
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition:{delay:2.4,duration:0.4,ease:"easeIn"}}} 
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto mb-10">
        <WorkTabs 
          projectFrontend={projectFrontend}
          projectDigital={projectDigital}
          projectData={projectData}
          projectCloud={projectCloud}
          projectsFrontend={projectsFrontend}
          projectsDigital={projectsDigital}
          projectsData={projectsData}
          projectsCloud={projectsCloud}
          setProjectFrontend={setProjectFrontend}
          setProjectDigital={setProjectDigital}
          setProjectData={setProjectData}
          setProjectCloud={setProjectCloud}
        />
      </div>
    </motion.section>
  );
};

export default Work;