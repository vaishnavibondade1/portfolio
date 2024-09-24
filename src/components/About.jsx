import React from "react";
import { motion } from 'framer-motion';
// import aboutImg from "../assets/images/about.png";
const About = () => {
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <section id="about" className="min-h-screen  flex items-center justify-center bg-slate-700 ">
      <div className="text-center mt-8">
        <motion.h3 
                                initial={{ x: -80, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
        className="text-4xl font-semibold text-white">
          ABOUT <span className="text-cyan-600">ME</span>
        </motion.h3>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 py-3 max-w-7xl mx-auto">
          <div className="p-2">
            <div className="text-white text-lg my-3">
              <motion.p 
               initial={{ x: -80, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ duration: 2 }}
              className="text-center leading-7 w-11/12 mx-auto">
              Hi! My name is Vaishnavi Bondade, and I'm a dedicated full-stack developer with a strong foundation in the MERN stack, and a keen eye for logical thinking and problem-solving.
              My expertise lies in the MERN stack, including JAVA , JavaScript, React, Express, Spring Boot, Redux, and Node.js. I've successfully built three projects using this technology stack: Vtrip, Vboard, and Vkart. These projects have allowed me to hone my technical skills and gain valuable hands-on experience.

In addition to my core skills, I'm currently expanding my knowledge by learning Spring Boot and React Native, and I have a strong understanding of data structures and algorithms.
              </motion.p>
       
              <br />
              <br />
           
            </div>
          </div>
      
        </div>
      </div>
    </section>
  );
};

export default About;
