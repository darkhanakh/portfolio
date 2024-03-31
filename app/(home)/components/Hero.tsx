import Link from "next/link";
import React from "react";
import { MovingBorderButton } from "@/components/ui/moving-button";
import { FaSuitcase } from "react-icons/fa";
import Title from "@/app/(home)/components/layout/Title";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const Hero: React.FC = () => {
  const words = [
    {
      text: "I'm",
    },
    {
      text: "Darkhan",
      className: "underline underline-offset-8 decoration-green-500",
    },
  ];

  return (
    <div className="min-h-[60vh] flex flex-col-reverse items-center justify-between gap-14 lg:flex-row lg:gap-0 animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold ">
          Nice to meet you!{" "}
          <span className="inline-block animate-wave">👋</span> <br />
          <TypewriterEffect words={words} className="inline-block" />
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {`Based in Kazakhstan, I'm a software engineer who loves building things
          for the web. I'm passionate about open-source, building communities,
          and creating products that have a positive impact on people's lives.`}
        </p>
        <Link
          href="mailto:darkhanahmetov2005@gmail.com"
          className="inline-block group"
        >
          <Title text={"Contact me 📫"} />
        </Link>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>

          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>

          <div className="glow absolute top-[35%] right-[50%] -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderButton
            borderRadius="0.5rem"
            className="p-3 font-semibold"
          >
            <p className="flex items-center">
              <FaSuitcase /> <span className="ml-1">Available for work</span>
            </p>
          </MovingBorderButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
