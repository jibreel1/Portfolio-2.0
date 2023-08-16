import React from "react";
import Skills from "./Skills";
import { BsEmojiSmile } from "react-icons/bs";

const About = () => {
   return (
      <div id="about" className="py-16 max-w-[1200px] m-auto md:pl-20 p-4">
         <h1 className="text-4xl font-bold text-center text-[#041776] mb-12">
            About me
         </h1>
         <div className="lg:flex gap-6">
            <div className="flex-1">
               <h2 className="text-3xl pt-4 text-[#041776]">
                  I enjoy solving problems with clean scalable solutions.
               </h2>
               <p className="text-lg pt-4">
                  I'm a frontend developer focused in building JavaScript
                  applications. I'm equipped with the right tools, and can
                  absolutely function independently of them to deliver fast,
                  resilient solutions optimized for scale — performance and
                  scalabilty are priorities on my radar.
               </p>
               <p className="text-lg pt-4">
                  I'm also a passionate freelancer bringing you programming and
                  design from the future. I am experienced in developing web and
                  desktop applications including full frontend design. This
                  includes brand identity, graphics and illustrations.
               </p>
               <p className="text-lg pt-4">
                  Now, you have two things to do... Check out some of my{" "}
                  <a
                     href="#projects"
                     className="font-semibold px-2 py-1 bg-gray-200 text-gray-700 rounded-lg"
                  >
                     Projects
                  </a>{" "}
                  or view{" "}
                  <a
                     href="https://drive.google.com/file/d/1FYS1Ri0cbNL-krl4Vvt1EauZQocLcIlW/view?usp=sharing"
                     className="font-semibold px-2 py-1 bg-gray-200 text-gray-700 rounded-lg"
                     target="_blank"
                  >
                     My Resume
                  </a>
               </p>
               <p className="text-lg pt-4 flex gap-2 items-center">
                  You choose! <BsEmojiSmile size={20} />
               </p>
            </div>
            <Skills />
         </div>
      </div>
   );
};

export default About;
