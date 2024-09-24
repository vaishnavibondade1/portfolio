import React from "react";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.png";
import project7 from "../assets/images/project-7.png";
import project8 from "../assets/images/project-8.png";
import project9 from "../assets/images/project-9.png";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Vtrip Static Website",
      github_link: "https://github.com/vaishnavibondade1/Vtrip-static",
      live_link: "https://vtrip-static-vaishnavi-bondade.netlify.app/",
    },
    {
      img: project2,
      name: "Vtrip Dynamic Website",
      github_link: "https://github.com/vaishnavibondade1/VTripDynamic",
      live_link: "https://v-trip-dynamic-tau.vercel.app/",
    },
    {
      img: project3,
      name: "VBoard",
      github_link: "https://github.com/vaishnavibondade1/VBoard",
      live_link: "https://v-board-vaishnavi-bondade.netlify.app/",
    },
    {
      img: project4,
      name: "NewApp",
      github_link: "https://github.com/vaishnavibondade1/React_news_app",
      live_link: "https://news-app-vaishnavi-bondade.netlify.app/",
    },
    {
      img: project5,
      name: "VKart",
      github_link: "https://github.com/vaishnavibondade1/Vkart",
      live_link: "https://vkart-jet.vercel.app/",
    },
    {
      img: project6,
      name: "VKart Backend",
      github_link: "https://github.com/vaishnavibondade1/Vkart-backend",
      live_link: "https://v-kart-backend-vaishnavi-bondade.vercel.app/",},
    {
      img: project7,
      name: "Maths Quiz",
      github_link: "https://github.com/vaishnavibondade1/Math-quiz",
      live_link: "https://math-quiz-vb.netlify.app/",  },
      {
        img: project8,
        name: "Portfolio-css-js",
        github_link: "",
        live_link: "https://portfoliovb23.netlify.app/",  },
        {
          img: project9,
          name: "dribblesvb",
          github_link: "",
          live_link: "https://dribbblesvb.netlify.app/",  },
  ];



  return (
    <section id="projects" className="min-h-screen py-32 text-gray-100 bg-slate-700">
      <div className="text-center">
      <motion.h3
                        initial={{ y: -80, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }} className="text-4xl font-semibold text-white">
          My <span className="text-white">PROJECTS</span>
        </motion.h3>
      </div>
      <br />
      <div className="flex flex-wrap gap-8 px-4 sm:px-2 py-10 mx-auto justify-center ">
        {projects.map((project_info, i) => (
                <motion.div
                key={i}
                initial={{ x: -80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="h-fit w-full sm:w-1/2 md:w-2/6 lg:w-2/6 md:h-[350px] lg:h-[450px] p-4 bg-slate-900 rounded-xl hover:bg-gray-900 transition-all duration-300 ease-in-out group hover:shadow-xl transform hover:-translate-y-2"
              >
    
            <img src={project_info.img} alt={project_info.name} className="rounded-lg h-58 w-full object-cover" />
            <h3 className="text-xl my-4">{project_info.name}</h3>
            <div className="flex gap-3">
              <a
                href={project_info.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
              >
                Github
              </a>
              <a
                href={project_info.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
