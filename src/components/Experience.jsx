


import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className="pb-16 px-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl font-bold text-gray-100"
      >
        Experience
      </motion.h2>

      <div className="space-y-12">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col lg:flex-row gap-6 bg-gray-950 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6"
          >
            {/* Year Section */}
            <div className="lg:w-1/4 text-gray-400 font-medium text-sm">
              {experience.year}
            </div>

            {/* Content Section */}
            <div className="lg:w-3/4">
              <h3 className="text-xl font-semibold text-gray-100">
                {experience.role}{' '}
                <span className="text-gray-400 text-sm">@ {experience.company}</span>
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                {experience.description}
              </p>

              {/* Technologies */}
              <div className="mt-4 flex flex-wrap gap-3">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
