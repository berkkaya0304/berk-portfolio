"use client";

import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";


const Home = () => {

  const titles = ['Computer Scientist', 'Software Engineer', 'Computer Engineer'];
  const titles2 = ['Computer Sciences', 'Software Engineering', 'Computer Engineering'];
  const first = "AI Powered";
  const first2 = "Welcome to Future of ";


  const handleDownload = () => {
    // CV dosyasının yolu
    const cvPath = '/cv/cv.pdf';
    
    // Yeni bir <a> elementi oluştur
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'cv.pdf'; // İndirilen dosyanın adı
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-full">
       <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <AnimatedTitle titles={titles} first={first}/>
            <h1 className="h1">
              Hello I&apos;m <br/> <span className="text-accent typewriter-text">Berk Kaya</span>
            </h1>
            <AnimatedTitle titles={titles2} first={first2}/>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button
             onClick={handleDownload}
             variant="outline"
             size="lg"
             className="uppercase flex items-center gap-2"
            >
              <span>Download CV</span>
              <FiDownload className="text-xl"/>
            </Button>
            <div className="mb-8 xl:mb-0">
              <Social containderStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration:500"/>
            </div>
          </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
       </div>
       <Stats />
    </section>
  )
}

export default Home