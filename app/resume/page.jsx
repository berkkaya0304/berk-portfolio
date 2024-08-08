"use client";

import {FaHtml5,FaCss3,FaJs,FaReact,FaFigma,FaNodeJs} from "react-icons/fa";
import {SiTailwindcss,SiNextdotjs} from "react-icons/si";

const about = {
  title:"About Me",
  description: "asldasşldkasdas",
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
  fieldName: "E-mail",
  fieldValue: "berkkaya0304@hotmail.com",
},
{
  fieldName: "Freelance",
  fieldValue: "Available",
},
{
  fieldName: "Languages",
  fieldValue: "Turkish, English, Deutsch",
},
  ]
}

const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My Experiences",
    description:
    "asdsadasdsa",
    items: [
      {
        company: "XXX",
        position: "XXX",
        duration: "XXX"
      },
      {
        company: "yyy",
        position: "yyy",
        duration: "yyy"
      },
      {
        company: "zzz",
        position: "zzz",
        duration: "zzz"
      },
    ]
}

const educationData = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
  "asdsadasdsa",
  items: [
    {
      institution: "XXX",
      degree: "XXX",
      duration: "XXX"
    },
    {
      institution: "YY",
      degree: "XYYYXX",
      duration: "XXYYX"
    },
    {
      institution: "YXXX",
      degree: "XYXX",
      duration: "XYXX"
    },
    {
      institution: "XYXX",
      degree: "XYXX",
      duration: "XYSELEXX"
    },
    {
      institution: "XXX",
      degree: "XXX",
      duration: "XXX"
    },
  ]
}

const skills = {
  title: "My Skills",
  description:
  "asdlkşkdşlaskddsa",
  skillList: [
    {
      icon: <FaFigma/>,
      name: "Figma",
    },
    {
      icon: <FaFigma/>,
      name: "Figma",
    },
    {
      icon: <FaFigma/>,
      name: "Figma",
    },
    {
      icon: <FaFigma/>,
      name: "Figma",
    },
    {
      icon: <FaFigma/>,
      name: "Figma",
    },
  ]
}

import { Tabs, TabsContent, TabsList,TabsTrigger} from "@/components/ui/tabs";
import { Tooltip, TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

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
                    return (<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:item-start gap-1">
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.company}</p>
                      </div>
                    </li>);
                   })}
                </ul>
              </div>
             </TabsContent>
             <TabsContent value="education" className="w-full">
              education
             </TabsContent>
             <TabsContent value="skills" className="w-full">
              skills
             </TabsContent>
             <TabsContent value="about" className="w-full">
              about
             </TabsContent>
          </div>
        </Tabs>
      </div>

    </motion.div>
  )
}

export default Resume