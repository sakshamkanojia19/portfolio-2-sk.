


import React from 'react';
import { motion } from 'framer-motion';

const techList = [
  { name: 'Selenium', color: 'text-red-400' },
  { name: 'JavaScript', color: 'text-yellow-400' },
  { name: 'Python', color: 'text-blue-400' },
  { name: 'React', color: 'text-cyan-400' },
  { name: 'Next.js', color: 'text-gray-300' },
  { name: 'Node.js', color: 'text-green-400' },
  { name: 'Express', color: 'text-green-500' },
  { name: 'MongoDB', color: 'text-green-600' },
  { name: 'Excel', color: 'text-blue-500' },
  { name: 'Postman', color: 'text-orange-400' },
  { name: 'Jupyter Notebook', color: 'text-yellow-500' },
  { name: 'Pandas', color: 'text-pink-400' },
  { name: 'NumPy', color: 'text-purple-400' },
  { name: 'MS Office', color: 'text-blue-600' },
  { name: 'Docker', color: 'text-blue-400' },
  { name: 'ShadCN', color: 'text-gray-400' },
  { name: 'Tailwind CSS', color: 'text-teal-400' },
  { name: 'Prisma', color: 'text-purple-500' },
  { name: 'Material UI', color: 'text-blue-300' },
  { name: 'Mocha', color: 'text-amber-500' }
];

// Framer Motion Animation Variants
const floatVariant = (delay) => ({
  initial: { y: 0, opacity: 0 },
  animate: {
    y: [-10, 10],
    opacity: 1,
    transition: {
      duration: 2,
      delay,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="my-20 text-center text-5xl font-bold tracking-wide"
      >
        Technologies
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-4">
        {techList.map((tech, index) => (
          <motion.div
            key={index}
            variants={floatVariant(index * 0.2)}
            initial="initial"
            animate="animate"
            className={`px-6 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 shadow-xl border border-gray-700 ${tech.color} text-lg font-semibold cursor-pointer hover:scale-105 transition-transform duration-300`}
          >
            {tech.name}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
