"use client";

import React from "react";
import Title from "@/app/(home)/components/layout/Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { IconType } from "react-icons";
import {
  SiGit,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

export interface Skill {
  name: string;
  Icon: IconType;
}

const Skills = () => {
  const skills: Skill[] = [
    {
      name: "React",
      Icon: SiReact,
    },
    {
      name: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      name: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      name: "Vue.js",
      Icon: SiVuedotjs,
    },
    {
      name: "Redux",
      Icon: SiRedux,
    },
    {
      name: "Node.js",
      Icon: SiNodedotjs,
    },
    {
      name: "Typescript",
      Icon: SiTypescript,
    },
    {
      name: "Git",
      Icon: SiGit,
    },
    {
      name: "Nest.js",
      Icon: SiNestjs,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🔪"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
};
export default Skills;
