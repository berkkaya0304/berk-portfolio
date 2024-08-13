"use client";

import { motion } from "framer-motion";
import { Tabs,TabsList,TabsContent,TabsTrigger } from "@/components/ui/tabs";

const certifications = [
  {
    id: 1,
    title: "Certified AWS Solutions Architect",
    issuer: "Amazon Web Services",
    date: "June 2023",
  },
  {
    id: 2,
    title: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    date: "April 2023",
  },
];


const Certifications = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate= {{opacity: 1, transition: {delay: 2.4, duration:0.4,ease: "easeIn"}}}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 mb-10"
    >
      <div className="container mx-auto">
        <Tabs
        defaultValue="experience"
        >
          <div className="grid grid-cols-1 gap-[30px]">
          <TabsList className="flex flex-row w-full mx-auto gap-6">
            <TabsTrigger value="cloud">Cloud</TabsTrigger>
            <TabsTrigger value="data">Data</TabsTrigger>
            <TabsTrigger value="cloud2">Cloud</TabsTrigger>
            <TabsTrigger value="data2">Data</TabsTrigger>
            <TabsTrigger value="cloud3">Cloud</TabsTrigger>
            <TabsTrigger value="data3">Data</TabsTrigger>
          </TabsList>
          <TabsList className="flex flex-row w-full mx-auto gap-6">
            <TabsTrigger value="cloud4">Cloud</TabsTrigger>
            <TabsTrigger value="data4">Data</TabsTrigger>
            <TabsTrigger value="cloud5">Cloud</TabsTrigger>
            <TabsTrigger value="data5">Data</TabsTrigger>
            <TabsTrigger value="cloud6">Cloud</TabsTrigger>
            <TabsTrigger value="data6">Data</TabsTrigger>
          </TabsList>
          </div>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="cloud" className="w-full">

            </TabsContent>
          </div>
        </Tabs>
        </div>
        </motion.div>
  );
};

export default Certifications;