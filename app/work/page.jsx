"use client";

import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub, BsYoutube } from "react-icons/bs";
import { FaCodepen } from "react-icons/fa";

import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList,TabsTrigger} from "@/components/ui/tabs";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";



const projectsFrontend = [
  {
    num: '01',
    category: 'front-end',
    title: 'Portfolio Project',
    description:
    "This project is the project version of the website you are currently using.",
    stack: [
      {name: "Next.js",},{name: "Tailwind",},{name: "Shadcn/ui",}
    ],
    image: '/assets/work/Frontend01.jpg',
    live: "berkkaya.me",
    github: "",
    youtube: "",
    codepen:"",
  },
  {
    num: '02',
    category: 'front-end',
    title: 'Portfolio Project',
    description:
    "Tribute Website",
    stack: [
      {name: "Html",},{name: "CSS",},{name: "JavaScript",}
    ],
    image: '/assets/work/Frontend02.jpg',
    live: "",
    github: "",
    youtube: "",
    codepen:"https://codepen.io/berkkaya0304/full/dyzmqOW",
    },
]

const projectsData = [
  {
    num: '01',
    category: 'data',
    title: 'project 1',
    description:
    "sadasldklasişldasd",
    stack: [
      {name: "Html 5",},{name: "Css 3",},{name: "Javascript",}
    ],
    image: '',
    live: "",
    github: "",
    youtube: "",
  },
]

const projectsCloud = [
  {
    num: '01',
    category: 'cloud',
    title: 'project 1',
    description:
    "sadasldklasişldasd",
    stack: [
      {name: "Html 5",},{name: "Css 3",},{name: "Javascript",}
    ],
    image: '',
    live: "",
    github: "",
    youtube: "",
  },
  {
    num: '02',
    category: 'cloud',
    title: 'project 1',
    description:
    "sadasldklasişldasd",
    stack: [
      {name: "Html 5",},{name: "Css 3",},{name: "Javascript",}
    ],
    image: '',
    live: "",
    github: "",
    youtube: "",
  },
]

const projectsDigital = [
  {
    num: '01',
    category: 'digital',
    title: 'project 1',
    description:
    "sadasldklasişldasd",
    stack: [
      {name: "Html 5",},{name: "Css 3",},{name: "Javascript",}
    ],
    image: '',
    live: "",
    github: "",
    youtube: "",
  },
]

const Work = () => {
  const [projectData, setProjectData] = useState(projectsData[0]);
  const [projectCloud, setProjectCloud] = useState(projectsCloud[0]);
  const [projectDigital, setProjectDigital] = useState(projectsDigital[0]);
  const [projectFrontend, setProjectFrontend] = useState(projectsFrontend[0]);

  const handleSlideChangeData = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProjectData(projectsData[currentIndex]);
  }

  const handleSlideChangeCloud = (swiper2) => {
    const currentIndex = swiper2.activeIndex;

    setProjectCloud(projectsCloud[currentIndex]);
  }

  const handleSlideChangeDigital = (swiper3) => {
    const currentIndex = swiper3.activeIndex;

    setProjectDigital(projectsDigital[currentIndex]);
  }

  const handleSlideChangeFrontend = (swiper4) => {
    const currentIndex = swiper4.activeIndex;

    setProjectFrontend (projectsFrontend[currentIndex]);
  }

  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition:{delay:2.4,duration:0.4,ease:"easeIn"}}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto mb-10">
      <Tabs
        defaultValue="experience"
        className="flex flex-col gap-[100px]"
        >
          <TabsList className="flex flex-row w-full max-w-[800px] mx-auto gap-6">
            <TabsTrigger value="front-end">Front-end</TabsTrigger>
            <TabsTrigger value="cloud">Cloud</TabsTrigger>
            <TabsTrigger value="data">Data</TabsTrigger>
            <TabsTrigger value="digital">Digitalisation</TabsTrigger>
          </TabsList>
        <TabsContent value="front-end" className="w-full">
        {projectFrontend && projectFrontend.num ? (
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{projectFrontend.num}</div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">Front-End project</h2>
                <p className="text-white/60">{projectFrontend.description}</p>
                <ul className="flex gap-4">
                  {projectFrontend.stack.map((item,index) => {
                    return (
                      <li key={index} className="text-xl text-accent">{item.name} {index !== projectFrontend.stack.length - 1 && ","}</li>
                    )
                  })}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex items-center gap-4">
                {projectFrontend.live && (
                  <Link href={projectFrontend.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {projectFrontend.github && (
                  <Link href={projectFrontend.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {projectFrontend.youtube && (
                  <Link href={projectFrontend.youtube} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsYoutube className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Youtube Video</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {projectFrontend.codepen && (
                  <Link href={projectFrontend.codepen} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <FaCodepen className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>CodePen project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChangeFrontend}>
                {projectsFrontend.map((a,index) => {
                   return(
                    <SwiperSlide key={index} className="w-full ">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        <div className="absolute top-0 bottom-0 w-full h-full "></div>
                        <div className="relative w-full h-full bg-black/10 z-10">
                          <Image src={a.image} fill className="object-cover" alt=""/>
                        </div>
                      </div>
                    </SwiperSlide>
                   )
                })}
                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
              </Swiper>
            </div>
        </div>
        ) : (
          <div></div>
        )}
        </TabsContent>
        <TabsContent value="data" className="w-full">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{projectData.num}</div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{projectData.category} project</h2>
                <p className="text-white/60">{projectData.description}</p>
                <ul className="flex gap-4">
                  {projectData.stack.map((item,index) => {
                    return (
                      <li key={index} className="text-xl text-accent">{item.name} {index !== projectData.stack.length - 1 && ","}</li>
                    )
                  })}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex items-center gap-4">
                {projectData.live && (
                  <Link href={projectData.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {projectData.github && (
                  <Link href={projectData.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {projectData.youtube && (
                  <Link href={projectData.youtube} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsYoutube className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Youtube Video</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChangeData}>
                {projectsData.map((b,index) => {
                   return(
                    <SwiperSlide key={index} className="w-full ">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        <div className="absolute top-0 bottom-0 w-full h-full "></div>
                        <div className="relative w-full h-full bg-black/10 z-10">
                          <Image src={b.image} fill className="object-cover" alt=""/>
                        </div>
                      </div>
                    </SwiperSlide>
                   )
                })}
                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
              </Swiper>
            </div>
        </div>
        </TabsContent>
        <TabsContent value="cloud" className="w-full">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{projectCloud.num}</div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{projectCloud.category} project</h2>
                <p className="text-white/60">{projectCloud.description}</p>
                <ul className="flex gap-4">
                  {projectCloud.stack.map((item,index) => {
                    return (
                      <li key={index} className="text-xl text-accent">{item.name} {index !== projectCloud.stack.length - 1 && ","}</li>
                    )
                  })}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex items-center gap-4">
                {projectCloud.live && (
                  <Link href={projectCloud.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  )}
                  {projectCloud.github && (
                  <Link href={projectCloud.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  )}
                  {projectCloud.youtube && (
                  <Link href={projectCloud.youtube} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsYoutube className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Youtube Video</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChangeCloud}>
                {projectsCloud.map((project,index) => {
                   return(
                    <SwiperSlide key={index} className="w-full ">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        <div className="absolute top-0 bottom-0 w-full h-full "></div>
                        <div className="relative w-full h-full bg-black/10 z-10">
                          <Image src={project.image} fill className="object-cover" alt=""/>
                        </div>
                      </div>
                    </SwiperSlide>
                   )
                })}
                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
              </Swiper>
            </div>
        </div>
        </TabsContent>
        <TabsContent value="digital" className="w-full">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{projectDigital.num}</div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">Digitalisation project</h2>
                <p className="text-white/60">{projectDigital.description}</p>
                <ul className="flex gap-4">
                  {projectDigital.stack.map((item,index) => {
                    return (
                      <li key={index} className="text-xl text-accent">{item.name} {index !== projectDigital.stack.length - 1 && ","}</li>
                    )
                  })}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex items-center gap-4">
                {projectDigital.live && (
                  <Link href={projectDigital.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {projectDigital.github && (
                  <Link href={projectDigital.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {projectDigital.youtube && (
                  <Link href={projectDigital.youtube} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsYoutube className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Youtube Video</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChangeDigital}>
                {projectsDigital.map((project,index) => {
                   return(
                    <SwiperSlide key={index} className="w-full ">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        <div className="absolute top-0 bottom-0 w-full h-full "></div>
                        <div className="relative w-full h-full bg-black/10 z-10">
                          <Image src={project.image} fill className="object-cover" alt=""/>
                        </div>
                      </div>
                    </SwiperSlide>
                   )
                })}
                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
              </Swiper>
            </div>
        </div>
        </TabsContent>
        </Tabs>
      </div>
    </motion.section>
  )
}

export default Work