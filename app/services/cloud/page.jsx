"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";

import { motion } from "framer-motion";
import Image from "next/image";

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
            <h3 className="text-5xl font-bold ">Cloud Technologies</h3>
            <img src="https://media.licdn.com/dms/image/D5612AQGdJwTfkaVA9A/article-cover_image-shrink_720_1280/0/1695748849925?e=2147483647&v=beta&t=lLpyk_jq2xK54oG6T_W3rZkz-qwtNdVQsyVY8W7X1WE"></img>
            </div>
            <p className="text-justify max-w-[600px] text-white/60 mx-auto">As your cloud technologies consultant, I can help your business harness the power of cloud computing to drive growth and efficiency. Cloud solutions offer scalable, cost-effective alternatives to traditional IT infrastructure, enabling you to reduce capital expenses, increase agility, and focus on core business activities. Whether you need to streamline operations, enhance data security, or improve collaboration, we can tailor a cloud strategy that aligns with your specific goals. From selecting the right cloud services to managing the migration process, our expertise ensures a smooth transition that maximizes your return on investment while minimizing disruption to your operations.</p>
         </motion.div>
      </div>
    </section>
  )
}

export default Services