import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsArrowUpRight, BsGithub, BsYoutube } from "react-icons/bs";
import { FaCodepen } from "react-icons/fa";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const ProjectCard = ({ projects, currentProject, onSlideChange }) => {
  return (
    <div className="flex flex-col xl:flex-row xl:gap-[30px]">
      <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
        <div className="flex flex-col gap-[30px] h-[50%]">
          <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
            {currentProject.num}
          </div>
          <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
            {currentProject.category} project
          </h2>
          <p className="text-white/60">{currentProject.description}</p>
          <ul className="flex gap-4">
            {currentProject.stack.map((item, index) => (
              <li key={index} className="text-xl text-accent">
                {item.name} {index !== currentProject.stack.length - 1 && ","}
              </li>
            ))}
          </ul>
          <div className="border border-white/20"></div>
          <div className="flex items-center gap-4">
            {currentProject.live && (
              <ProjectLink
                href={currentProject.live}
                icon={<BsArrowUpRight />}
                tooltip="Live project"
              />
            )}
            {currentProject.github && (
              <ProjectLink
                href={currentProject.github}
                icon={<BsGithub />}
                tooltip="Github Repository"
              />
            )}
            {currentProject.youtube && (
              <ProjectLink
                href={currentProject.youtube}
                icon={<BsYoutube />}
                tooltip="Youtube Video"
              />
            )}
            {currentProject.codepen && (
              <ProjectLink
                href={currentProject.codepen}
                icon={<FaCodepen />}
                tooltip="CodePen project"
              />
            )}
          </div>
        </div>
      </div>
      <div className="w-full xl:w-[50%] relative">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className="h-[460px] xl:h-[520px]"
          onSlideChange={onSlideChange}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  fill
                  className="object-cover rounded-lg"
                  alt={`Project ${project.num}`}
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </SwiperSlide>
          ))}
          <WorkSliderBtns
            containerStyles="flex gap-2 absolute right-0 bottom-0 z-20 xl:bottom-[4rem]"
            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
          />
        </Swiper>
      </div>
    </div>
  );
};

const ProjectLink = ({ href, icon, tooltip }) => (
  <Link href={href} target="_blank">
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
          <div className="text-white text-3xl group-hover:text-accent">
            {icon}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Link>
);

export default ProjectCard;
