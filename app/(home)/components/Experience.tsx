import React from "react";
import Title from "@/app/(home)/components/layout/Title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import getExperience from "@/lib/getExperience";
import ExperienceLayout from "@/app/(home)/components/layout/ExperienceItem";

const Experience = async () => {
  const experience = await getExperience();

  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text={"Experience 🌟"}
        className="flex flex-col items-center justify-center"
      />
      <div className="mt-10">
        <Tabs
          defaultValue={experience[0].organization}
          className="flex-col items-center md:flex-row md:items-start"
        >
          <TabsList className="sm:w-[90%]">
            {experience.map((exp) => (
              <TabsTrigger key={exp.organization} value={exp.organization}>
                {exp.organization}
              </TabsTrigger>
            ))}
          </TabsList>
          {experience.map((exp) => (
            <TabsContent
              key={exp.organization}
              value={exp.organization}
              className="flex-shrink-0"
            >
              <ExperienceLayout {...exp} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

// <Tabs defaultValue="account" className="w-[400px]">
//   <TabsList>
//     <TabsTrigger value="olscience">OlScience</TabsTrigger>
//     <TabsTrigger value="password">Password</TabsTrigger>
//   </TabsList>
//   <TabsContent value="olscience">
//     Make changes to your account here.
//   </TabsContent>
//   <TabsContent value="password">Change your password here.</TabsContent>
// </Tabs>

export default Experience;
