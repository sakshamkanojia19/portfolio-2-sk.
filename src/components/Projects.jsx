





import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const techProjects = PROJECTS.filter(
    (project) => project.category === "Tech"
  );

  return (
    <div className="px-4">
      {/* Section title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Projects
      </motion.h2>

      {/* Tech projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {techProjects.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
            className="mb-8 p-4 bg-gray-950 rounded-lg shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="mb-4 w-full h-64 object-cover rounded"
            />
            <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
            <p className="text-gray-400 mb-4">{project.description}</p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* External link */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit&nbsp;Site&nbsp;→
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
