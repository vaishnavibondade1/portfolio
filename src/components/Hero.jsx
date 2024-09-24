import React from "react";
import { motion } from 'framer-motion';
import resume from '../assets/Vaishnavi-Bondade-Resume.pdf'; 

const Hero = () => {
  const social_media = [
    {
      icon: "logo-linkedin",
      url: "https://www.linkedin.com/in/vaishnavi-bondade-04813a23a/",  // Add your LinkedIn profile URL here// Add your LinkedIn profile URL here
    },
    {
      icon: "logo-github",
      url: "https://github.com/vaishnavibondade1", // Add your GitHub profile URL here
    },
    {
      icon: "mail",
      url: "mailto:vaishnavibondade23@gmail.com", // Add your email here
    },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-10 md:flex-row flex-col items-center"
    >
     
      <div className="flex px-12">
        <div className="md:text-left text-center">
        <motion.h1
                            initial={{ x: -80, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="md:text-6xl text-4xl text-black dark:text-white sm:mt-20 mb-10"
                        >
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            Welcome to my <span>Portfolio</span>
          </motion.h1>
          <motion.h4 
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="md:text-2xl text-lg md:leading-normal leading-5 ml-1.5 font-bold text-slate-500">
           I'm Vaishnavi And I Am A Full-Stack Developer
          </motion.h4>
          <motion.a  
                                          initial={{ x: -80, opacity: 0 }}
                                          whileInView={{ x: 0, opacity: 1 }}
                                          transition={{ duration: 1 }}
             href={resume} // Use the imported resume file
  download >
                <motion.button
                initial={{ x: -80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="btn-primary mt-10">Download CV</motion.button>
              </motion.a>
              <motion.div 
                                              initial={{ x: -80, opacity: 0 }}
                                              whileInView={{ x: 0, opacity: 1 }}
                                              transition={{ duration: 1 }}
              className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media.map((social) => (
              <div
                key={social.icon}
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  <ion-icon name={social.icon}></ion-icon>
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
