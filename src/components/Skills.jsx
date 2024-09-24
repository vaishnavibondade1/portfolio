import React from "react";
import { motion } from "framer-motion"; // Import motion for animations 
import Slider from "react-slick"; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Import default styles
import "slick-carousel/slick/slick-theme.css"; // Import theme styles

const Skills = () => {
  const skills = [
    "JAVA", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", 
    "API integration, Context API, RESTful API", "HTML, CSS", 
    "Bootstrap", "Tailwind CSS", "SASS","Git, GitHub", "Netlify, Vercel, Firebase", "Redux", "Spring Boot", "React Native", "VS Code", "Responsive Design", "UI/UX Design, Figma"
  ];

  // Slider settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Number of slides to scroll at once
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="skills"

    className="bg-white pt-16 pb-24">
      <div className="container px-5 pt-20 pb-8 mx-auto">
        <div className="text-center mb-12">
        <motion.h1
                        initial={{ y: -80, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
           className="text-4xl font-bold title-font text-gray-900 mb-4">
            Skills &amp; Technologies
          </motion.h1>
          <motion.p
                        initial={{ y: -80, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }} className="text-base leading-relaxed text-gray-500">
            The technologies and skills that I've honed through my experience.
          </motion.p>
        </div>
        <Slider {...settings}> {/* Initialize Slider with settings */}
          {skills.map((skill) => (
            <motion.div key={skill} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4">
              <div className="h-full bg-gray-100/60 p-6 rounded-lg hover:bg-cyan-600/20 transition-all duration-300 ease-in-out group hover:shadow-xl transform hover:-translate-y-2">
                {/* Skill Icon (optional) */}
                <div className="w-10 h-10 mb-4 inline-flex items-center justify-center rounded-full bg-cyan-600 text-white group-hover:bg-cyan-800 transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0-1.105 0-3.633 0-5m0 0a4.5 4.5 0 110 9m0-4a4.5 4.5 0 100-9m4.5 4.5A4.5 4.5 0 0112 12z"
                    />
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                  {skill}
                </h2>
                <p className="leading-relaxed text-base text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                  Proficiency in using {skill} to build dynamic and scalable solutions.
                </p>
              </div>
            </motion.div>
          ))}
        </Slider> {/* Close Slider */}
      </div>
    </section>
  );
};

export default Skills;
