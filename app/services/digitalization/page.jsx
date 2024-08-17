"use client";

import BackButton from "@/components/backbutton/BackButton";

import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

const Services = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mb-10">
      <div className="container mx-auto">
         <motion.div
         initial= {{opacity: 0}}
         animate={{
          opacity: 1,
          transition: {delay: 2.4, duration:0.4, ease: "easeIn"},
         }}
         className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center"
         >
            <div className="grid gap-[60px]">
            <h3 className="text-5xl font-bold ">Digitalization</h3>
            <img src="https://gl-m.linker-cdn.net/article/2020/Nov/f049b83052928038eac9e779bb8a0660.png"></img>
            </div>
            <p className="justify-center max-w-[600px] text-white/60 mx-auto">As your digitalization consultant, I&apos;ll guide your organization in adopting digital technologies to streamline operations, enhance customer experiences, and drive innovation. We&apos;ll leverage tools like cloud computing, AI, and data analytics to optimize processes and create new revenue streams. Our tailored approach will align digital solutions with your goals, helping you stay competitive in the digital age. Together, we&apos;ll transform your business into a digital powerhouse, ready to thrive in an increasingly connected world.</p>
         </motion.div>
         <motion.div
         initial= {{opacity: 0}}
         animate={{
          opacity: 1,
          transition: {delay: 2.4, duration:0.4, ease: "easeIn"},
         }}>
          <BackButton onClick={handleGoBack} className={""} />
         </motion.div>
      </div>
    </section>
  )
}

export default Services