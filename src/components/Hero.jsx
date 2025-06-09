



import React from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profilepic.png";

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
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-transparent text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex justify-center lg:w-1/2"
        >
          <motion.img
            src={profilePic}
            alt="Saksham Kanojia"
            className="w-64 h-64 object-cover rounded-full shadow-xl border-4 border-blue-500 hover:shadow-blue-500/50 transition duration-500"
            whileHover={{
              scale: 1.05,
              rotate: 1,
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="lg:w-1/2 text-center lg:text-left space-y-6"
        >
          <motion.h1
            variants={childVariants}
            className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Saksham <span className="text-blue-500">Kanojia</span>
          </motion.h1>

          <motion.p
            variants={childVariants}
            className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent text-2xl font-semibold"
          >
            Full-Stack Developer | AI Automation Engineer | Software Tester
          </motion.p>

          <motion.p
            variants={childVariants}
            className="text-gray-400 text-lg leading-relaxed"
          >
            {HERO_CONTENT}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={childVariants}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4"
          >
            <a
              href="https://drive.google.com/file/d/125fNGMiR5SiEsDGgAgTFXK8QPAvxH3id/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-cyan-500 text-black font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>📄</span> Download Resume
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>📬</span> Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
