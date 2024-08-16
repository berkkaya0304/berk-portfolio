"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";

import { motion } from "framer-motion";

const Services = () => {
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
            <h3 className="text-5xl font-bold">Data Technologies</h3>
            <img alt="Data Technology" src="https://successive.cloud/wp-content/uploads/2022/04/Data-Analytics-Benefits-768x403.png"></img>
            </div>
            <p className="text-justify max-w-[600px] text-white/60 mx-auto">As your data technologies consultant, I recommend focusing on building a comprehensive data ecosystem that aligns with your business objectives. This involve implementing scalable storage solutions, and leveraging advanced analytics tools. By adopting a holistic approach to data management, you&apos;ll be able to extract actionable insights, drive informed decision-making, and gain a competitive edge in your industry. Remember, the key is not just accumulating data, but effectively harnessing its power to fuel growth and innovation.</p>
         </motion.div>
      </div>
    </section>
  )
}

export default Services