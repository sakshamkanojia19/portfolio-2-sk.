

// import React from "react";
// import { motion } from "framer-motion";
// import profilePic from "../assets/profilepic.png";
// import { HERO_CONTENT } from "../constants";

// const containerVariants = {
//   hidden: { opacity: 0, x: -50 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeInOut",
//       staggerChildren: 0.3
//     }
//   }
// };

// const childVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// };

// const Hero = () => {
//   return (
//     <div className="relative flex items-center justify-center py-16 lg:py-32 bg-gradient-to-b ">
//       <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center">
//         {/* Profile Image */}
//         <div className="w-full lg:w-1/2 flex justify-center">
//           <motion.img
//             src={profilePic}
//             alt="Saksham Kanojia"
//             className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-gray-700"
//             initial={{ scale: 0.5, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
//             whileHover={{
//               scale: 1.05,
//               rotate: 2,
//               transition: { duration: 0.3 }
//             }}
//           />
//         </div>

//         {/* Hero Text */}
//         <div className="w-full lg:w-1/2 text-center lg:text-left px-6">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={containerVariants}
//           >
//             {/* Name */}
//             <motion.h1
//               variants={childVariants}
//               className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
//             >
//               Saksham Kanojia
//             </motion.h1>

//             {/* Title */}
//             <motion.span
//               variants={childVariants}
//               className="mt-4 block bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-2xl lg:text-4xl font-semibold text-transparent"
//             >
//               Full-Stack Developer | Software Automation Testing
//             </motion.span>

//             {/* Description */}
//             <motion.p
//               variants={childVariants}
//               className="mt-6 text-lg lg:text-xl text-gray-400 leading-relaxed"
//             >
//               {HERO_CONTENT}
//             </motion.p>

//             {/* Buttons */}
//             <motion.div
//               variants={childVariants}
//               className="mt-8 flex justify-center lg:justify-start gap-4"
//             >
//               {/* Resume Button */}
//               <motion.a
//                 href="https://drive.google.com/drive/folders/1F291vBTK2AzuqvlKGYP3suQex-3pj32s?usp=sharing"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 download
//                 className="px-6 py-3 bg-blue-600 text-black font-semibold rounded-full shadow-md hover:bg-cyan-500 hover:shadow-lg transition-all duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Download Resume ↓
//               </motion.a>

//               {/* Contact Button */}
//               <motion.a
//                 href="#contact"
//                 className="px-6 py-3 border-2 border-gray-700 text-gray-300 font-semibold rounded-full shadow-md hover:bg-gray-800 transition-all duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Contact Me
//               </motion.a>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;




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
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
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
              href="https://drive.google.com/drive/folders/1F291vBTK2AzuqvlKGYP3suQex-3pj32s?usp=sharing"
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
