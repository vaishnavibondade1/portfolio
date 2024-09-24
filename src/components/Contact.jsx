import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "vaishnavibondade23@gmail.com" },
    { logo: "logo-whatsapp", text: "+919110813361" },
    {
      logo: "location",
      text: "Bengaluru, Karnataka, India",
    },
  ];
  return (
    <motion.section
    initial={{ y: -80, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 2 }}
    id="contact" className="min-h-screen px-4 text-white pt-28">
      <div className="text-center">
      <h3 className="text-4xl font-semibold">
        <span className="text-gray-900">CONTACT</span>
        </h3>
        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Your Name" />
            <input type="Email" placeholder="Your Email Address" />
            <textarea placeholder="Your Message" rows={10}></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
