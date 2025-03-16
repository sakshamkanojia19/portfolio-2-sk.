

import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profilepic.png";
import { HERO_CONTENT } from "../constants";

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      staggerChildren: 0.3
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center py-16 lg:py-32 bg-gradient-to-b ">
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center">
        {/* Profile Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.img
            src={profilePic}
            alt="Saksham Kanojia"
            className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-gray-700"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.3 }
            }}
          />
        </div>

        {/* Hero Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Name */}
            <motion.h1
              variants={childVariants}
              className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
            >
              Saksham Kanojia
            </motion.h1>

            {/* Title */}
            <motion.span
              variants={childVariants}
              className="mt-4 block bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-2xl lg:text-4xl font-semibold text-transparent"
            >
              Full-Stack Developer | Automation Tester | Data Analyst
            </motion.span>

            {/* Description */}
            <motion.p
              variants={childVariants}
              className="mt-6 text-lg lg:text-xl text-gray-400 leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={childVariants}
              className="mt-8 flex justify-center lg:justify-start gap-4"
            >
              {/* Resume Button */}
              <motion.a
                href="https://drive.google.com/drive/folders/1F291vBTK2AzuqvlKGYP3suQex-3pj32s?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="px-6 py-3 bg-blue-600 text-black font-semibold rounded-full shadow-md hover:bg-cyan-500 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume ↓
              </motion.a>

              {/* Contact Button */}
              <motion.a
                href="#contact"
                className="px-6 py-3 border-2 border-gray-700 text-gray-300 font-semibold rounded-full shadow-md hover:bg-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
