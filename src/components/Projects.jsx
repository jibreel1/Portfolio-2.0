import Readr from "../assets/readr.png";
import Nutrifeed from "../assets/nutrifeed1.png";
import Space from "../assets/project_1.png";
import Gericht from "../assets/project_2.png";
import { BiLink } from "react-icons/bi";

const Projects = () => {
   const projects = [
      {
         id: 1,
         img: Readr,
         title: "READR",
         subtitle:
            "Readr is a social reading application for sharing your reading experience with friends family and co-workers.",
         preview: "https://crowd-readr.netlify.app/",
         tech: "React, Firebase, Material UI, SASS, Context API",
      },
      {
         id: 2,
         img: Nutrifeed,
         title: "Nutrifeed",
         subtitle:
            "An Ecommerce website that allows you order and buy various plants and flowers for your interior space.",
         preview: "https://nutrifeed-app.netlify.app/",
         tech: "React, Javascript, Firebase, Material UI, SASS",
      },
      {
         id: 3,
         img: Space,
         title: "Space Tourism",
         subtitle:
            "A space launching website created to showcase the destinations, crews and techs used in space travel.",
         preview: "https://space-travel-app.netlify.app/",
         tech: "React, Javascript, SASS",
      },
      {
         id: 4,
         img: Gericht,
         title: "Gericht Restaurant",
         subtitle:
            "A Restaurant Website created to showcase their various menus, services, awards and location.",
         preview: "https://gericht-food-app.netlify.app/",
         tech: "React, Javascript, CSS",
      },
   ];
   return (
      <div id="projects" className="max-w-[1200px] m-auto md:pl-20 p-4 py-16">
         <h1 className="text-4xl font-bold text-center text-[#041776]">
            Projects
         </h1>
         <p className="text-center py-8 text-lg">
            Here are a few past design projects I've worked on. Want to see
            more?{" "}
            <a
               href="mailto:osunkoyajubril6000@gmail.com"
               className="text-[#041776] font-semibold underline"
            >
               Email me.
            </a>
         </p>
         <div className="grid sm:grid-cols-2 gap-12">
            {projects.map(project => (
               <div
                  key={project.id}
                  className="relative flex items-center justify-center h-[250px] w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-b from-gray-500 to-[#041776]"
               >
                  <img
                     className="rounded-xl group-hover:opacity-10 h-[250px] object-cover w-full object-top"
                     loading="lazy"
                     src={project.img}
                     alt={project.title}
                  />
                  <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ease-in-out duration-300">
                     <h3 className=" text-xl md:text-2xl font-bold text-white tracking-wider text-center">
                        {project.title}
                     </h3>
                     <p className=" text-sm md:text-lg text-white pb-4 pt-2 w-[300px]">
                        {project.subtitle}
                     </p>
                     <p className="text-white text-sm pb-4">{project.tech}</p>
                     <a href={project.preview}>
                        <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold inline-flex items-center justify-center gap-1 hover:bg-gray-300 hover:text-black">
                           <BiLink /> Vist Website
                        </p>
                     </a>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Projects;
