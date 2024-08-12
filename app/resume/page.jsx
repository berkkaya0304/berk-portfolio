"use client";

import {FaAngular, FaCloud, FaJava, FaPython, FaReact, FaUnity} from "react-icons/fa";
import {DiDocker} from "react-icons/di";
import {SiFlutter, SiKubernetes} from "react-icons/si";
import {TbSql} from "react-icons/tb";
import { BiLogoSpringBoot } from "react-icons/bi";

const about = {
  title:"About Me",
  description: "I've been interested in learning since I was a youngster. My interest in engineering stems from my youth. I was the one who controlled the classroom computer using scratch codes I developed in computer classes and realized even when I was very young. Now I'm taking the measures necessary to become a successful engineer. With strenuous effort and the expertise, I gained from my institution, I am confident rather than hopeful that this will be accomplished. I'm attempting to obtain numerous credentials and training for this.",
  info: [
    {
       fieldName: "Name",
       fieldValue: "Berk Kaya",
    },
    {
      fieldName: "Phone",
      fieldValue: "Provided If You Need",
   },
   {
    fieldName: "Experience",
    fieldValue: "2+ Years",
 },
 {
  fieldName: "Discord",
  fieldValue: "loadonline",
},
{
  fieldName: "Nationality",
  fieldValue: "Turkish",
},
{
  fieldName: "Email",
  fieldValue: "berkkaya0304@hotmail.com",
},
{
  fieldName: "Freelance",
  fieldValue: "Available",
},
{
  fieldName: "Languages",
  fieldValue: "Turkish, English, German",
},
  ]
}

const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My Experiences",
    description:
    "In this section, you can find information about my internship, part-time and full-time work.",
    items: [
      {
        company: "Huawei",
        position: "Cloud Engineer Intern",
        duration: "July 2024 - August 2024",
        time: "(2 months)"
      },
      {
        company: "Nurol Technology",
        position: "Project Worker",
        duration: "January 2024 - June 2024",
        time: "(6 months)"
      },
      {
        company: "QNB Finansbank",
        position: "Finance 101 Intern",
        duration: "January 2024 - February 2024",
        time: "(2 months)"
      },
      {
        company: "Huawei",
        position: "FullStack Dev. Intern",
        duration: "August 2023 - September 2023",
        time: "(2 months)"
      },
      {
        company: "Turkish Mercantile Exchange",
        position: "FullStack Dev. Intern",
        duration: "July 2023 - August 2023",
        time: "(2 months)"
      },
    ]
}

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
  "In this section, you will see the education I have received in general.",
  items: [
    {
      institution: "TED University",
      degree: "Computer Engineering",
      duration: "September 2022 - July 2026"
    },
    {
      institution: "Google Academy",
      degree: "Game-App",
      duration: "December 2022 - August 2023"
    },
    {
      institution: "Young Executive Academy",
      degree: "Being Executive",
      duration: "January 2023 - June 2023"
    },
    {
      institution: "TED University",
      degree: "English Preparation",
      duration: "September 2021 - July 2022"
    },
  ]
}

const skills = {
  title: "My Skills",
  description:
  "In this section, you can see which technologies I can use in general and that I have created at least 1 project.",
  skillList: [
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaCloud />,
      name: "Cloud Technologies",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <PiFileCSharp />,
      name: "C#",
    },
    {
      icon: <FaUnity />,
      name: "Unity",
    },
    {
      icon: <DiDocker />,
      name: "Docker",
    },
    {
      icon: <SiKubernetes/>,
      name: "Kubernetes",
    },
    {
      icon: <TbSql />,
      name: "SQL Technologies",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter",
    },
    {
      icon: <FaAngular />,
      name: "Angular",
    },
    {
      icon: <BiLogoSpringBoot />,
      name: "Spring Boot",
    },
  ]
}

import { Tabs, TabsContent, TabsList,TabsTrigger} from "@/components/ui/tabs";
import { Tooltip, TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { PiFileCSharp } from "react-icons/pi";

const Resume = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate= {{opacity: 1, transition: {delay: 2.4, duration:0.4,ease: "easeIn"}}}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
             <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea></ScrollArea>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                   {experience.items.map((item,index) => {
                    return (<li key={index} className="bg-[#232329] min-w-[370px] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:item-start gap-2">
                      <span className="text-accent gap-[50px]">{item.duration}</span>
                      <span className="text-accent">{item.time}</span>
                      <h3 className="text-xl max-w-[370px] min-h-[35px] text-center lg:text-left">{item.position}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="max-w-[370px] text-white/60">{item.company}</p>
                      </div>
                    </li>);
                   })}
                </ul>
              </div>
             </TabsContent>
             <TabsContent value="education" className="w-full">
             <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea></ScrollArea>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                   {education.items.map((item,index) => {
                    return (<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:item-start gap-1">
                      <span className="text-accent gap-[50px]">{item.duration}</span>
                      <h3 className="text-xl max-w-[370px] min-h-[35px] text-center lg:text-left">{item.degree}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.institution}</p>
                      </div>
                    </li>);
                   })}
                </ul>
              </div>
             </TabsContent>
             <TabsContent value="skills" className="w-full">
             <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                <ScrollArea></ScrollArea>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  gap-[30px]">
                   {skills.skillList.map((skill,index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                   })}
                </ul>
              </div>
             </TabsContent>
             <TabsContent value="about" className="w-full text-cente xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60  mx-auto xl:mx-0">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item,index) =>{
                      return (
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                            <span className="text-white/60">{item.fieldName}</span>
                            <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      )
                    })}

                  </ul>
                </div>
             </TabsContent>
          </div>
        </Tabs>
      </div>

    </motion.div>
  )
}

export default Resume