"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";

const services = [
  {
    num: "01",
    title: "Full-Stack Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec pharetra quam. Etiam dignissim risus at laoreet fermentum. Quisque sagittis auctor elit at accumsan. Phasellus rhoncus sagittis libero sed faucibus. Morbi consectetur eros augue, ut lobortis ante fringilla at. Proin nisi ligula, luctus ac pulvinar ac, sodales ut augue. Cras ex odio, lacinia ac lorem sed, blandit dictum odio. Quisque dapibus ex quis velit porttitor, quis vestibulum nisi tempor.",
    href: ""
  },
  {
    num: "02",
    title: "Cloud Technologies",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec pharetra quam. Etiam dignissim risus at laoreet fermentum. Quisque sagittis auctor elit at accumsan. Phasellus rhoncus sagittis libero sed faucibus. Morbi consectetur eros augue, ut lobortis ante fringilla at. Proin nisi ligula, luctus ac pulvinar ac, sodales ut augue. Cras ex odio, lacinia ac lorem sed, blandit dictum odio. Quisque dapibus ex quis velit porttitor, quis vestibulum nisi tempor.",
    href: "",
  },
  {
    num: "03",
    title: "Data Technologies",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec pharetra quam. Etiam dignissim risus at laoreet fermentum. Quisque sagittis auctor elit at accumsan. Phasellus rhoncus sagittis libero sed faucibus. Morbi consectetur eros augue, ut lobortis ante fringilla at. Proin nisi ligula, luctus ac pulvinar ac, sodales ut augue. Cras ex odio, lacinia ac lorem sed, blandit dictum odio. Quisque dapibus ex quis velit porttitor, quis vestibulum nisi tempor.",
    href: "",
  },
  {
    num: "04",
    title: "Project Management",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec pharetra quam. Etiam dignissim risus at laoreet fermentum. Quisque sagittis auctor elit at accumsan. Phasellus rhoncus sagittis libero sed faucibus. Morbi consectetur eros augue, ut lobortis ante fringilla at. Proin nisi ligula, luctus ac pulvinar ac, sodales ut augue. Cras ex odio, lacinia ac lorem sed, blandit dictum odio. Quisque dapibus ex quis velit porttitor, quis vestibulum nisi tempor.",
    href: "",
  }
]

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
         <motion.div
         initial= {{opacity: 0}}
         animate={{
          opacity: 1,
          transition: {delay: 2.4, duration:0.4, ease: "easeIn"},
         }}
         className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
         >
            {services.map((service,index) =>{
              return (
                <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                  <div className="w-full flex justify-between items-center">
                   <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">{service.num}</div>
                   <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                     <BsArrowDownRight className="text-primary text-3xl"/>
                   </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b boder-white/20 w-full"></div>
                </div>
              )
            })}
         </motion.div>
      </div>
    </section>
  )
}

export default Services