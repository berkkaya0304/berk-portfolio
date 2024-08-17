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
            <h3 className="text-5xl font-bold ">Full-Stack Dev.</h3>
            <img src="https://www.talentcoders.co/wp-content/uploads/2023/06/full-stack-yazilimci.png"></img>
            </div>
            <p className="text-justify max-w-[600px] text-white/60 mx-auto">Are you looking to revolutionize your digital presence? Full-Stack Development is the key to unlocking your project&apos;s full potential. I can guide you through the intricacies of both front-end and back-end technologies, ensuring a seamless, efficient, and robust application. From crafting intuitive user interfaces to architecting powerful server-side solutions, we&apos;ll cover all bases. By leveraging a full-stack approach, we can streamline your development process, reduce costs, and deliver a product that truly stands out in today&apos;s competitive digital landscape. Let&apos;s collaborate to turn your vision into reality, creating scalable, maintainable, and cutting-edge web applications that drive your business forward.</p>
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