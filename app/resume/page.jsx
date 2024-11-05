"use client";

import {FaAngular, FaBitcoin, FaCloud, FaJava, FaLinux, FaPython, FaReact, FaUnity} from "react-icons/fa";
import {DiDocker} from "react-icons/di";
import {SiFlutter, SiKubernetes} from "react-icons/si";
import {TbSql} from "react-icons/tb";
import { BiLogoSpringBoot } from "react-icons/bi";
import Image from "next/image";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import { FaArrowUpFromBracket } from "react-icons/fa6";

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
    title: "Experience Journey",
    description:
    "In this section, you can find information about my internship, part-time and full-time work.",
    items: [
      {
        company: "Huawei",
        position: "Cloud Engineer Long Term Intern",
        duration: "September 2024 - January 2025",
        time: "(5 months)"
      },
      {
        company: "Basarsoft",
        position: "Computer Engineer Intern",
        duration: "August 2024 - September 2024",
        time: "(2 months)"
      },
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

const voluntarilyWorks = {
  icon: "/assets/resume/badge.svg",
  title: "Voluntarily Work Journey",
  description:
  "In this section, you can find information about mu voluntarily works.",
  items: [
    {
      company: "Model Courts of Justice",
      position: "Director of IT & Design",
      duration: "September 2024 - September 2025",
      time: "(1 year)"
    },
    {
      company: "Leader Development Program",
      position: "Website Team Leader",
      duration: "October 2023 - October 2024",
      time: "(1 year)"
    },
    {
      company: "Tübitak Project",
      position: "Contributor",
      duration: "October 2023 - August 2024",
      time: "(11 months)"
    },
    {
      company: "TEDU Science & Technology",
      position: "President",
      duration: "July 2022 - August 2023",
      time: "(1 year 1 month)"
    },
  ]
}


const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education Journey",
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

const soft = {
  title: "Soft Skills",
  description:
  "This page shows you my soft skills. You can access the Turkish test results by clicking the button below.",
  skills: [
    {
      name: "Self-Management",
      rating: 100,
      description: "Resilience",
    },
    {
      name: "Self-Competence",
      rating: 90,
      description: "Resilience",
    },
    {
      name: "Coping with Stress",
      rating: 95,
      description: "Resilience",
    },
    {
      name: "Managing Emotions",
      rating: 98,
      description: "Resilience",
    },
    {
      name: "Managing Relationships",
      rating: 100,
      description: "Resilience",
    },
    {
      name: "Goal Focus, Planning",
      rating: 99,
      description: "Resilience",
    },
    {
      name: "Building Close Relationships",
      rating: 87,
      description: "Personality",
    },
    {
      name: "Stress Level",
      rating: 39,
      description: "Personality",
    },
    {
      name: "Thought Orientation",
      rating: 96,
      description: "Personality",
    },
  ]
}

const ambassador = {
  title: "Ambassador  Journey",
  description:
  "On this page you can see the ambassador work I have done.",
  items: [
    {
      company: "IBM",
      topic: "Z Captain",
      duration: "September 2024 - Present",
      description: " I am one of the 6 captain ambassadors who will lead 150+ ambassadors this year.",
      level: "(Level 4 - Highest Level)"
    },
    {
      company: "IBM",
      topic: "Z Student Ambassador",
      duration: "November 2023 - Present",
      description: "The IBM Z Student Ambassador program is a global community of university students passionate about technology. Through hands-on learning, mentorship, and networking opportunities, ambassadors gain the skills and experience they need to succeed in the tech industry.",
      level: "(Level 4 - Highest Level)"
    },
    {
      company: "Xbox",
      topic: "Ambassador",
      duration: "September 2023 - Present",
      description: "The Xbox Ambassador program is a community of gamers who are passionate about making gaming fun for everyone.",
      level: "Level 2"
    },
    {
      company: "Microsoft",
      topic: "Student Ambassador",
      duration: "November 2023 - September 2024",
      description: "As a Microsoft Learn Student Ambassador, you'll gain hands-on experience with Microsoft technologies like Azure, Windows, and Office 365 while developing essential skills for the tech industry, including problem-solving, communication, and teamwork. You'll also have the chance to connect with a diverse network of students, Microsoft employees, and industry leaders. By sharing your knowledge, you'll make a meaningful impact by helping others learn and grow.",
      level: "(Alpha)"
    },

  ]
}

const referencesList = [
  // Daha fazla referans ekleyebilirsiniz
];


const certifications = [
  {
    title: "Developer Associate - AI",
    issuer: "Huawei Cloud",
    date: "July 2024",
    image: "https://fs-intl-en-us.connect.huaweicloud.com/FileServer/getFile/vector/011/111/111/0000000000011111111.20240726151007.20996619988002026016639861969173:50550813202105:2800:547B88EB84C44CE67D389804E100894EB83A5B2AFE24EADDF327380BC700A279.png",
    category: "Cloud",
  },
  {
    title: "Developer Associate - Tech Essentials",
    issuer: "Huawei Cloud",
    date: "Dec 2023",
    image: "https://fs-intl-en-us.connect.huaweicloud.com/FileServer/getFile/vector/011/111/111/0000000000011111111.20231229154003.26748684713176376740678732337194:50550813202022:2800:6E4E181FEDBA518C7DFF8EC5AD985340C0E8F77F7BA05A98BA5281035C14007F.png",
    category: "Cloud",
  },
  {
    title: "Extended Reality For Everybody",
    issuer: "University of Michigan - Coursera",
    date: "June 2023",
    image: "https://www.coursera.org/account/accomplishments/specialization/certificate/5VGTX77AQPMT",
    category: "Extended Reality",
  },
  {
    title: "Data Analyst",
    issuer: "IBM - Coursera",
    date: "May 2023",
    image: "https://www.coursera.org/account/accomplishments/specialization/certificate/VUU4VNKUCEUL",
    category: "Data",
  },
  {
    title: "Data Science",
    issuer: "IBM - Coursera",
    date: "May 2023",
    image: "https://www.coursera.org/account/accomplishments/specialization/certificate/69FNTFBWMNCJ",
    category: "Data",
  },
  {
    title: "Data Analyst",
    issuer: "IBM - Coursera",
    date: "May 2023",
    image: "https://www.coursera.org/account/accomplishments/specialization/certificate/VUU4VNKUCEUL",
    category: "Cloud",
  },
  {
    title: "Data Science",
    issuer: "IBM - Coursera",
    date: "May 2023",
    image: "https://www.coursera.org/account/accomplishments/specialization/certificate/69FNTFBWMNCJ",
    category: "Cloud",
  },
  {
    title: "Project Management",
    issuer: "Google",
    date: "Feb 2023",
    image: "https://www.coursera.org/account/accomplishments/specialization/certificate/Q4FAA9HL66NY",
    category: "Project Management",
  },
  {
    title: "Modern and Contemporary Art and Design",
    issuer: "MoMA",
    date: "Feb 2023",
    image: "https://www.coursera.org/account/accomplishments/specialization/certificate/LUX8G3FX86AD",
    category: "Art & Culture",
  },
  {
    title: "Certificate of Achievement",
    issuer: "Global Executive Academy",
    date: "June 2022",
    image: "https://dogrulama.ogrencikariyeri.com/YEA19863656",
    category: "Social",
  },
  {
    title: "Certificate of Executive",
    issuer: "Global Executive Academy",
    date: "June 2022",
    image: "https://dogrulama.ogrencikariyeri.com/YEA22329569",
    category: "Social",
  },
  {
    title: "C#.NET Course Certificate Of Achievement",
    issuer: "Gazi University",
    date: "April 2022",
    image: "",
    category: "Software",
  },
  {
    title: "Introduction to AI, Robotics and Data",
    issuer: "Global AI Hub",
    date: "Jan 2022",
    image: "https://globalaihub.com/certificate-share/eyJ1c2VyLWlkIjo5MzU5MiwiY291cnNlLWlkIjo2MDg1MCwiY2VydC1pZCI6IjczMDUxIn0=",
    category: "Software",
  },
  {
    title: "Introduction to AI, Robotics and Data",
    issuer: "Global AI Hub",
    date: "Jan 2022",
    image: "https://globalaihub.com/certificate-share/eyJ1c2VyLWlkIjo5MzU5MiwiY291cnNlLWlkIjo2MDg1MCwiY2VydC1pZCI6IjczMDUxIn0=",
    category: "Data",
  },
  {
    title: "Introduction to AI, Robotics and Data",
    issuer: "Global AI Hub",
    date: "Jan 2022",
    image: "https://globalaihub.com/certificate-share/eyJ1c2VyLWlkIjo5MzU5MiwiY291cnNlLWlkIjo2MDg1MCwiY2VydC1pZCI6IjczMDUxIn0=",
    category: "Artificial Intelligence",
  },
  {
    title: "Introduction to Deep Learning",
    issuer: "Great Learning",
    date: "Jan 2022",
    image: "https://olympus1.mygreatlearning.com/course_certificate/KMCQLEWQ",
    category: "Artificial Intelligence",
  },
  {
    title: "CS50's Introduction to Computer Science",
    issuer: "Harvard University",
    date: "Dec 2021",
    image: "",
    category: "Software",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Nov 2021",
    image: "https://freecodecamp.org/certification/berkkaya0304/responsive-web-design",
    category: "Front-End",
  },
  {
    title: "Effective Communication Techniques Training",
    issuer: "Boenstitü",
    date: "Oct 2021",
    image: "https://istanbulbogazicienstitu.com/hesap/sertifika-sorgula?sertifika=MTEzNDI2LS0tNDEzOTItLS1kYTRiOTIzN2JhY2NjZGYxOWMwNzYwY2FiN2FlYzRhODM1OTAxMGIw",
    category: "Social",
  },
  {
    title: "Introduction to CyberSecurity",
    issuer: "Cisco",
    date: "May 2022",
    image: "https://www.credly.com/badges/f900b7e7-2e6c-4cc4-bf30-f93638a62b08",
    category: "Cybersecurity",
  },
  {
    title: "IBM Z Xplore - Concepts",
    issuer: "IBM",
    date: "November 2023",
    image: "https://www.credly.com/badges/f900b7e7-2e6c-4cc4-bf30-f93638a62b08",
    category: "Mainframe",
  },
  {
    title: "IBM Z Xplore - Advanced",
    issuer: "IBM",
    date: "November 2023",
    image: "https://www.credly.com/badges/b27603aa-5eec-488b-a3b2-e8fa61b14d4f",
    category: "Mainframe",
  },
  {
    title: "IBM Z and LinuxONE Community Contributor",
    issuer: "IBM",
    date: "November 2023",
    image: "https://www.credly.com/badges/91411626-ebe2-435d-adf1-1756df4d63ad",
    category: "Social",
  },
  {
    title: "Blockchain Technologies",
    issuer: "Interskill",
    date: "December 2023",
    image: "https://www.credly.com/badges/5bfd2c5a-a1fd-42c2-aedd-34792bfa293e",
    category: "Blockchain",
  },
  {
    title: "AIX Systems Administrator - Fundamentals",
    issuer: "IBM",
    date: "December 2023",
    image: "https://www.credly.com/badges/456b30c0-362b-441c-af4b-ce4b2b2e3d61",
    category: "Mainframe",
  },
  {
    title: "AIX Systems Administrator - Fundamentals for UNIX Specialists",
    issuer: "IBM",
    date: "December 2023",
    image: "https://www.credly.com/badges/d1fd738e-cee6-49cb-a676-3603b0af2cf7",
    category: "Mainframe",
  },
  {
    title: "Cloud Foundations",
    issuer: "IBM",
    date: "December 2023",
    image: "https://www.credly.com/badges/a0a98584-1e20-42af-b023-35527d11feab",
    category: "Cloud",
  },
  {
    title: "DevOps Fundamentals",
    issuer: "IBM",
    date: "December 2023",
    image: "https://www.credly.com/badges/8c266149-0d91-4eee-96ef-d3e5b91adbd2",
    category: "DevOps",
  },
  {
    title: "Coaching and Mentoring for Technical Specialists",
    issuer: "IBM",
    date: "December 2023",
    image: "https://www.credly.com/badges/be820005-cb1c-4209-b9bb-55b7170697ce",
    category: "Social",
  },
  {
    title: "Azure Responsible AI Workshop - Coach",
    issuer: "Microsoft",
    date: "January 2024",
    image: "https://www.credly.com/badges/53f494a0-9191-4d94-bc6f-f07e338d321d",
    category: "Social",
  },
  {
    title: "Enterprise System Hardware 2023 - Foundations",
    issuer: "IBM",
    date: "February 2024",
    image: "https://www.credly.com/badges/06155ec4-99c1-4bdc-bf0e-c876c28270bd",
    category: "Mainframe",
  },
  {
    title: "LinuxONE System Hardware 2023 - Foundations",
    issuer: "IBM",
    date: "February 2024",
    image: "https://www.credly.com/badges/f6a2d8e8-db9f-4178-80ea-6354688738bb",
    category: "Mainframe",
  },
  {
    title: "z/OS – Foundations 2.5",
    issuer: "IBM",
    date: "February 2024",
    image: "https://www.credly.com/badges/e700184c-0606-4549-b6d0-ecd8adf15770",
    category: "Mainframe",
  },
  {
    title: "Mainframe Security - Foundations z/OS 2.5",
    issuer: "IBM",
    date: "February 2024",
    image: "https://www.credly.com/badges/a0e6c7ef-fa95-458e-8c1c-80f72a1c7c2f",
    category: "Mainframe",
  },
  {
    title: "Business Continuity and Disaster Recovery Essentials - Foundations",
    issuer: "IBM",
    date: "February 2024",
    image: "https://www.credly.com/badges/6d9dbd0c-b266-4b62-b3a3-0ecaddfedde9",
    category: "Mainframe",
  },
  {
    title: "Data Center Disaster Recovery Planning - Experienced",
    issuer: "IBM",
    date: "February 2024",
    image: "https://www.credly.com/badges/f648e58c-fc9b-4c61-ab11-098ccdba602c",
    category: "Mainframe",
  },
  {
    title: "Technical Manager Level I Certificate",
    issuer: "IBM",
    date: "February 2024",
    image: "https://www.credly.com/badges/703be71a-bbe2-44be-9f85-47993586cc15",
    category: "Mainframe",
  },
  {
    title: "Engineer Data for Predictive Modeling with BigQuery ML",
    issuer: "Google Cloud",
    date: "April 2024",
    image: "https://www.credly.com/badges/24ad9ac9-1785-4302-bda0-39ffb44bbbe3",
    category: "Cloud",
  },
  {
    title: "Development Environment – Foundations 2.5",
    issuer: "IBM",
    date: "April 2024",
    image: "https://www.credly.com/badges/30b567b3-d966-4e44-bc07-d43a78feae3f",
    category: "Mainframe",
  },
  {
    title: "Mainframe Performance - Fundamentals 2.5",
    issuer: "IBM",
    date: "April 2024",
    image: "https://www.credly.com/badges/777bb1dd-be0c-40b5-9d9f-fef47d8ff8a2",
    category: "Mainframe",
  },
  {
    title: "Hardware Management Console - Fundamentals",
    issuer: "IBM",
    date: "April 2024",
    image: "https://www.credly.com/badges/1458f694-f6d5-4d25-8ca4-d346e8c5bcb2",
    category: "Mainframe",
  },
  {
    title: "Database - Fundamentals 2023",
    issuer: "IBM",
    date: "April 2024",
    image: "https://www.credly.com/badges/47d88e71-4e21-4934-b16c-a15234b56194",
    category: "Mainframe",
  },
  {
    title: "Database Management - Intermediate 2023",
    issuer: "IBM",
    date: "April 2024",
    image: "https://www.credly.com/badges/73258e90-893d-41ae-8571-e7373c9e52c2",
    category: "Mainframe",
  },
  {
    title: "Prepare Data for ML APIs on Google Cloud",
    issuer: "Google Cloud",
    date: "May 2024",
    image: "https://www.credly.com/badges/b19d1009-46ad-444b-b0fe-bed355354be6",
    category: "Cloud",
  },
  {
    title: "Prepare Data for ML APIs on Google Cloud",
    issuer: "Google Cloud",
    date: "May 2024",
    image: "https://www.credly.com/badges/b19d1009-46ad-444b-b0fe-bed355354be6",
    category: "Data",
  },
  {
    title: "Prepare Data for ML APIs on Google Cloud",
    issuer: "Google Cloud",
    date: "May 2024",
    image: "https://www.credly.com/badges/b19d1009-46ad-444b-b0fe-bed355354be6",
    category: "Artificial Intelligence",
  },
  {
    title: "NASA Open Science",
    issuer: "NASA(USA)",
    date: "May 2024",
    image: "https://www.credly.com/badges/2743137f-a9e2-4e40-9d67-51c88f9630bf",
    category: "Science",
  },
  {
    title: "Contributor",
    issuer: "IBM",
    date: "May 2024",
    image: "https://www.credly.com/badges/2d971824-d747-4368-b971-4c8565131fec",
    category: "Social",
  },
  {
    title: "Working in a Digital World: Professional Skills",
    issuer: "IBM",
    date: "August 2024",
    image: "https://www.credly.com/badges/1129b50b-857b-4bc9-83cf-ead021ba7150",
    category: "Technology",
  },
  {
    title: "Explore Emerging Tech",
    issuer: "IBM",
    date: "August 2024",
    image: "https://www.credly.com/badges/2b525e24-064a-41ae-a2ce-136ca421f2b0",
    category: "Technology",
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM",
    date: "August 2024",
    image: "https://www.credly.com/badges/768174fe-fb58-420d-8237-ec733bd57193",
    category: "Cybersecurity",
  },
  {
    title: "AWS Cloud Technology Consultant",
    issuer: "Amazon Web Services(AWS)",
    date: "August 2024",
    image: "https://coursera.org/share/0eab1c8c03e25e6b66066c53d0a8eb89",
    category: "Cloud",
  },
  {
    title: "Strategic Leadership and Management",
    issuer: "University of Illinois Urbana-Champaign",
    date: "August 2024",
    image: "https://coursera.org/share/eff189497ea493e984be533f2b422487",
    category: "Social",
  },
];


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
      icon: <FaBitcoin />,
      name: "Blockchain",
    },
    {
      icon: <FaLinux />,
      name: "Linux",
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
import { useState } from "react";

const Resume = () => {

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const filteredCertifications = certifications.filter(
    (cert) => cert.category === selectedCategory
  );

  return (
    <motion.div
    initial={{opacity: 0}}
    animate= {{opacity: 1, transition: {delay: 2.4, duration:0.4,ease: "easeIn"}}}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto mb-10">
        <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px] xl:h-[650px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="voluntarily">Voluntarily Works</TabsTrigger>
            <TabsTrigger value="skills">Technical Skills</TabsTrigger>
            <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            <TabsTrigger value="ambassador">Ambassador</TabsTrigger>
            <TabsTrigger value="Certifications">Certifications</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="reference">References</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
          <TabsContent value="reference" className="w-full">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">References</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
         Valuable insights about my professional competencies
        </p>
        <ScrollArea className="h-[600px]">
          <ul className="grid grid-cols-1 gap-[30px]">
            {referencesList.map((reference, index) => (
              <li
                key={index}
                className="bg-[#232329] min-w-[370px] py-6 px-10 rounded-xl flex flex-row items-center gap-6"
              >
                <div className="w-24 h-24 relative rounded-full overflow-hidden">
                  <Image
                    src={reference.image}
                    alt={reference.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">{reference.name}</h3>
                  <p className="text-white/60 text-sm">{reference.position}</p>
                  <p className="text-white/80 text-justify mt-2">{reference.testimonial}</p>
                </div>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>
    </TabsContent>
          <TabsContent value="soft" className="w-full text-center">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{soft.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{soft.description}</p>
                <div className="flex justify-center">
                <a
  href="https://drive.google.com/drive/folders/1uJ1czvD6T6Qjjam6DUVmogb6_n6suD8l"
  target="_blank"
  rel="noopener noreferrer"
>
<Button
                href="https://drive.google.com/drive/folders/1uJ1czvD6T6Qjjam6DUVmogb6_n6suD8l"
                className="w-full sm:w-auto"
                >
                Click Here For All Results (Turkish)
                </Button>
</a>
</div>
                <ul className="grid grid-cols-1 gap-[30px]">
            {soft.skills.map((skill, index) => (
              <li
                key={index}
                className="bg-[#232329] w-full sm:min-w-[370px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2"
              >
                <h3 className="text-xl max-w-[370px] min-h-[35px] text-center lg:text-left">
                  {skill.name}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <p className="max-w-[370px] text-white/60">Rating: {skill.rating}/100</p>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                  <div
                    className="bg-accent h-2.5 rounded-full"
                    style={{ width: `${skill.rating}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-center mt-2">
                  <p className="text-white/60 text-justify">{skill.description}</p>
                </div>
              </li>
            ))}
          </ul>
              </div>
             </TabsContent>
          <TabsContent value="ambassador" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{ambassador.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{ambassador.description}</p>
                <ScrollArea></ScrollArea>
                <ul className="grid grid-cols-1 gap-[30px]">
                   {ambassador.items.map((item,index) => {
                    return (<li key={index} className="bg-[#232329] min-w-[370px]  py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:item-start gap-2">
                      <span className="text-accent gap-[50px]">{item.duration}</span>
                      <span className="text-accent">{item.level}</span>
                      <h3 className="text-xl max-w-[370px] min-h-[35px] text-center lg:text-left">{item.topic}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="max-w-[370px] text-white/60">{item.company}</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <p className=" text-white/60 text-justify">{item.description}</p>
                      </div>
                    </li>);
                   })}
                </ul>
              </div>
             </TabsContent>
             <TabsContent value="Certifications" className="w-full text-center xl:text-justify">
             <Select onValueChange={handleCategoryChange}>
      <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Topic:" />
      </SelectTrigger>
      <SelectGroup>
      <SelectContent>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Cloud">Cloud</SelectItem>
                    <SelectItem value="Data">Data</SelectItem>
                    <SelectItem value="Social">Social</SelectItem>
                    <SelectItem value="Mainframe">Mainframe</SelectItem>
                    <SelectItem value="Extended Reality">Extended Reality</SelectItem>
                    <SelectItem value="Software">Software</SelectItem>
                    <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
                    <SelectItem value="Artificial Intelligence">Artificial Intelligence</SelectItem>
                    <SelectItem value="Front-End">Front-End</SelectItem>
                    <SelectItem value="Project Management">Project Management</SelectItem>
                    <SelectItem value="Art & Culture">Art & Culture</SelectItem>
                    <SelectItem value="Blockchain">Blockchain</SelectItem>
                    <SelectItem value="DevOps">DevOps</SelectItem>
                    <SelectItem value="Science">Science</SelectItem>
      </SelectContent>
      </SelectGroup>
      </Select>
      {selectedCategory && (
          <div className="mt-4">
            {filteredCertifications.length > 0 ? (
              <ul>
                {filteredCertifications.map((cert,index) => {

                  return (<li key={index} className="bg-[#232329] min-w-[370px]  py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:item-start mb-5 gap-2">
                      <span className="text-accent gap-[50px]">{cert.date}</span>
                      <h3 className="text-xl min-w-[370px] min-h-[35px] text-center items-center justify-center">{cert.title}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="max-w-[370px] text-white/60">{cert.issuer}</p>
                      </div>
                      {cert.image && (
                       <div className="flex items-center justify-center">
                       <a href={cert.image} target="_blank" rel="noopener noreferrer">
                       <Button><FaArrowUpFromBracket /></Button>
                       </a>
                      </div>
                       )}
                    </li>);
                  })}
              </ul>
            ) : (
              <p>No certifications found for this category.</p>
            )}
          </div>
        )}
             </TabsContent>
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
             <TabsContent value="voluntarily" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{voluntarilyWorks.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{voluntarilyWorks.description}</p>
                <ScrollArea></ScrollArea>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                   {voluntarilyWorks.items.map((item,index) => {
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
             <TabsContent value="skills" className="w-full text-center xl:text-justify">
             <div className="flex flex-col gap-[30px] text-center xl:text-justify">
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
             <TabsContent value="about" className="w-full text-center xl:text-justify">
                <div className="flex flex-col gap-[30px] text-center xl:text-justify">
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