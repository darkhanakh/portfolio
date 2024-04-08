import React from "react";
import { IconType } from "react-icons";
import {
  SiExpress,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import Title from "@/app/(home)/components/layout/Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

interface Project {
  title: string;
  techStack: IconType[];
  cover: string;
  github: string;
  background: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Portfolio",
      techStack: [SiNextdotjs, SiTailwindcss],
      cover: "/projects/project-1.png",
      github: "https://github.com/darkhanakh/portfolio",
      background: "border-green-500",
    },
    {
      title: "Tjournal Clone",
      techStack: [SiNextdotjs, SiSass, SiNestjs, SiRedux, SiPostgresql],
      cover: "/projects/project-2.png",
      github: "https://github.com/darkhanakh/tjournal-frontend",
      background: "border-indigo-500",
    },
    {
      title: "Readme.GPT",
      techStack: [SiJavascript, SiTailwindcss, SiExpress, SiVite],
      cover: "/projects/project-3.png",
      github: "https://github.com/darkhanakh/readme-gpt",
      background: "border-rose-500",
    },
  ];
  return (
    <div className="my-10 p-5 sm:p-0">
      <Title
        text="Projects 🧠"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid pt-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.github} key={index}>
              <div className={cn("p-5 rounded-md h-full border-2")}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full h-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.techStack.map((Icon, index) => (
                        <Icon key={index} className="w-8 h-8" />
                      ))}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
