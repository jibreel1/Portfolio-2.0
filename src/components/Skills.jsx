import React from "react";
import {
   SiTailwindcss,
   SiFirebase,
   SiGraphql,
   SiRedux,
   SiGithub,
   SiMui,
   SiTypescript,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { FaReact, FaSass } from "react-icons/fa";

const Skills = () => {
   const skillsData = [
      { id: "1", name: "Javascript", icon: <DiJavascript1 size={20} /> },
      { id: "2", name: "React", icon: <FaReact size={20} /> },
      { id: "3", name: "TypeScript", icon: <SiTypescript size={20} /> },
      { id: "4", name: "Firebase", icon: <SiFirebase size={20} /> },
      { id: "5", name: "Material UI", icon: <SiMui size={20} /> },
      { id: "6", name: "Tailwind CSS", icon: <SiTailwindcss size={20} /> },
      { id: "7", name: "SASS", icon: <FaSass size={20} /> },
      { id: "8", name: "Redux", icon: <SiRedux size={20} /> },
      { id: "9", name: "Graphql", icon: <SiGraphql size={20} /> },
      { id: "10", name: "Git/Github", icon: <SiGithub size={20} /> },
   ];
   return (
      <div id="skills" className="flex-1 pt-12 md:pt-0">
         <h2 className="text-3xl pt-4 text-[#041776] mb-8">
            Tools I work with
         </h2>
         <div className="">
            {skillsData.map(skill => (
               <div
                  key={skill.id}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg inline-block mr-4 mb-5 shadow-lg shadow-gray-200 hover:scale-105 ease-in-out duration-300"
               >
                  <span className="flex gap-2 items-center font-medium">
                     {skill.icon}
                     {skill.name}
                  </span>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Skills;
