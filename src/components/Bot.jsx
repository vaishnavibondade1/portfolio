import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion for animations

const Bot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

 

  return (
    <>
      <div
        aria-label="Open chat"
        role="button"
        className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-10 flex items-center justify-center rounded-full animate-bounce"
        onClick={toggleChat}
      >
        <ion-icon name="chatbubble-ellipses"></ion-icon>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed bottom-20 sm:right-8 right-4 z-[998] bg-white shadow-lg w-80 h-50 rounded-lg p-4 border border-gray-300"
        >
          <h2 className="text-xl font-semibold">Hi! How can i help?</h2>
          <textarea
            className="w-full h-20 p-2 border border-gray-300 rounded bg-gray-100"
            placeholder="Type your message..."
          />
          <a href="#contact">   <button  onClick={toggleChat} className="mt-2 bg-cyan-600 text-white px-4 py-2 rounded">
            Send
          </button></a>
       
        </motion.div>
      )}
    </>
  );
};

export default Bot;
