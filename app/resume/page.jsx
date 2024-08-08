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

const experienceData = {
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
    <motion.div>

    </motion.div>
  )
}

export default Resume