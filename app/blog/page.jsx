import React from 'react'

import Link from 'next/link'
import { BsArrowDownRight } from 'react-icons/bs'

const blog = {
  title: "Blog",
  description:
  "On this page you can see the ambassador work I have done.",
  items: [
    {
      name: "Publishing Your Go Application with CodeArts!",
      topic: "Huawei Cloud - CodeArts",
      date: "Aug 5,2024",
      href:"https://medium.com/huawei-developers/publishing-your-go-application-with-codearts-f69b4b37f394",
    },
  ]
}

const Blog = () => {
  return (
    <div className="min-h-[70vh] w-full">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold">{blog.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{blog.description}</p>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
             {blog.items.map((post,index) => {
              return (
              <li key={index} className="bg-[#232329] min-w-[370px]  py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:item-start gap-2">
                <h3 className="items-center text-center text-2xl font-bold">{post.name}</h3>
                <span className="text-accent gap-[50px]">{post.date}</span>
                <h3 className="text-xl max-w-[370px] min-h-[35px] text-center lg:text-left">{post.topic}</h3>
                <Link href={post.href} target="_blank" className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                     <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
              </li>
              );
             })}
             </ul>
        </div>
       </div>
  )
}

export default Blog