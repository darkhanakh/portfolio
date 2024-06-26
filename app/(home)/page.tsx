import React from "react";
import Header from "@/app/(home)/components/Header";
import Hero from "@/app/(home)/components/Hero";
import Skills from "@/app/(home)/components/Skills";
import Projects from "@/app/(home)/components/Projects";
import Footer from "@/app/(home)/components/Footer";
import Experience from "@/app/(home)/components/Experience";

const Page = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
        <div className="max-w-7xl mx-auto p-5">
          <Header />
          <Hero />
        </div>
        <div className="h-10 xl:h-14 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full" />
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
