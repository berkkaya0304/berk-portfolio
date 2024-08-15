"use client";

import React from "react";

import CountUp from "react-countup";

const today = new Date();

const stats = [
  {
    num: (today.getFullYear() - 2003),
    text: "Years Old",
  },
  {
    num: 12,
    text: "Projects Completed",
  },
  {
    num: 10,
    text: "Technologies Mastered",
  },
  {
    num: 225,
    text: "Code Commits",
  },
]

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto mb-10">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item,index) =>{
            return(
              <div
              className="gap-4 flex-1 flex items-center justify-center xl:justify-start"
              key={index}>
                <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6l font-extrabold"/>
                <p className={`${item.text.length < 15 ? "max-w-[100px]" :"max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
              </div>
              );
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats