"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";

const services = [
  {
    num: "01",
    title: "Full-Stack Development",
    description: "Are you looking to revolutionize your digital presence? Full-Stack Development is the key to unlocking your project's full potential. I can guide you through the intricacies of both front-end and back-end technologies, ensuring a seamless, efficient, and robust application. From crafting intuitive user interfaces to architecting powerful server-side solutions, we'll cover all bases. By leveraging a full-stack approach, we can streamline your development process, reduce costs, and deliver a product that truly stands out in today's competitive digital landscape. Let's collaborate to turn your vision into reality, creating scalable, maintainable, and cutting-edge web applications that drive your business forward.",
    href: ""
  },
  {
    num: "02",
    title: "Cloud Technologies",
    description: "As your cloud technologies consultant, I can help your business harness the power of cloud computing to drive growth and efficiency. Cloud solutions offer scalable, cost-effective alternatives to traditional IT infrastructure, enabling you to reduce capital expenses, increase agility, and focus on core business activities. Whether you need to streamline operations, enhance data security, or improve collaboration, we can tailor a cloud strategy that aligns with your specific goals. From selecting the right cloud services to managing the migration process, our expertise ensures a smooth transition that maximizes your return on investment while minimizing disruption to your operations.",
    href: ""
  },
  {
    num: "03",
    title: "Data Technologies",
    description: "As your data technologies consultant, I recommend focusing on building a comprehensive data ecosystem that aligns with your business objectives. This involve implementing scalable storage solutions, and leveraging advanced analytics tools. By adopting a holistic approach to data management, you'll be able to extract actionable insights, drive informed decision-making, and gain a competitive edge in your industry. Remember, the key is not just accumulating data, but effectively harnessing its power to fuel growth and innovation.",
    href: "",
  },
  {
    num: "04",
    title: "Digitalisation",
    description: "As your digitalization consultant, I'll guide your organization in adopting digital technologies to streamline operations, enhance customer experiences, and drive innovation. We'll leverage tools like cloud computing, AI, and data analytics to optimize processes and create new revenue streams. Our tailored approach will align digital solutions with your goals, helping you stay competitive in the digital age. Together, we'll transform your business into a digital powerhouse, ready to thrive in an increasingly connected world.",
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