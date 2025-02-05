import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./ProjectCard";

const WorkTabs = ({
  projectFrontend,
  projectDigital,
  projectData,
  projectCloud,
  projectsFrontend,
  projectsDigital,
  projectsData,
  projectsCloud,
  setProjectFrontend,
  setProjectDigital,
  setProjectData,
  setProjectCloud,
}) => {
  return (
    <Tabs defaultValue="front-end" className="flex flex-col gap-[100px]">
      <TabsList className="flex flex-row w-full max-w-[800px] mx-auto gap-6">
        <TabsTrigger value="front-end">Front-end</TabsTrigger>
        <TabsTrigger value="digital">Digitalisation</TabsTrigger>
        <TabsTrigger value="data">Data</TabsTrigger>
        <TabsTrigger value="cloud">Cloud</TabsTrigger>
      </TabsList>

      <TabsContent value="front-end" className="w-full">
        {projectFrontend && projectFrontend.num && (
          <ProjectCard
            projects={projectsFrontend}
            currentProject={projectFrontend}
            onSlideChange={(swiper) =>
              setProjectFrontend(projectsFrontend[swiper.activeIndex])
            }
          />
        )}
      </TabsContent>

      <TabsContent value="digital" className="w-full">
        <ProjectCard
          projects={projectsDigital}
          currentProject={projectDigital}
          onSlideChange={(swiper) =>
            setProjectDigital(projectsDigital[swiper.activeIndex])
          }
        />
      </TabsContent>

      <TabsContent value="data" className="w-full">
        <ProjectCard
          projects={projectsData}
          currentProject={projectData}
          onSlideChange={(swiper) =>
            setProjectData(projectsData[swiper.activeIndex])
          }
        />
      </TabsContent>

      <TabsContent value="cloud" className="w-full">
        <ProjectCard
          projects={projectsCloud}
          currentProject={projectCloud}
          onSlideChange={(swiper) =>
            setProjectCloud(projectsCloud[swiper.activeIndex])
          }
        />
      </TabsContent>
    </Tabs>
  );
};

export default WorkTabs;
