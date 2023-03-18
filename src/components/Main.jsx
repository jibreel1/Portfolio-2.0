import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import Pic from "../assets/picca.jpg";

const Main = () => {
   return (
      <div id="main">
         <img
            className="w-full h-screen object-cover object-left"
            src="https://images.unsplash.com/photo-1678653300286-94e7cce4d826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="hero"
         />
         <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
            <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center lg:items-start">
               <h1 className="sm:text-6xl text-4xl font-bold text-[#041776]">
                  Osunkoya Jibreel
               </h1>
               <h2 className="flex sm:text-3xl text-2xl text-gray-800 pt-4">
                  I'm a
                  <TypeAnimation
                     sequence={[
                        "Frontend Developer.",
                        2000,
                        "Problem Solver.",
                        2000,
                        "Freelancer.",
                        2000,
                     ]}
                     wrapper="div"
                     cursor={true}
                     repeat={Infinity}
                     style={{
                        fontSize: "1em",
                        paddingLeft: "5px",
                        fontWeight: 500,
                        color: "#041776",
                     }}
                  />
               </h2>
               <a
                  href="#contact"
                  className="mt-6 py-2 px-4 bg-[#041776] text-gray-100 cursor-pointer hover:scale-105 ease-in-out duration-300"
               >
                  Hire me
               </a>
               <div className="flex justify-between pt-6 max-w-[150px] w-full">
                  <a
                     href="https://github.com/jibreel1/"
                     className="hover:scale-105 ease-in-out duration-300"
                     target="_blank"
                  >
                     <FaGithub
                        className="cursor-pointer"
                        size={25}
                        color="#041776"
                     />
                  </a>
                  <a
                     href="https://www.linkedin.com/in/jibreel-osunkoya/"
                     className="hover:scale-105 ease-in-out duration-300"
                     target="_blank"
                  >
                     <FaLinkedinIn
                        className="cursor-pointer"
                        size={25}
                        color="#041776"
                     />
                  </a>
                  <a
                     href="https://twitter.com/jubril1005"
                     className="hover:scale-105 ease-in-out duration-300"
                     target="_blank"
                  >
                     <FaTwitter
                        className="cursor-pointer"
                        size={25}
                        color="#041776"
                     />
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Main;
