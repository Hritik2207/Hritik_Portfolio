import { motion } from "framer-motion";
import { PROJECTS } from "../constants/index.js";

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-10 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <h1 className="my-20 text-center text-4xl font-bold text-purple-400">
        Projects
      </h1>

      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mb-8 flex flex-wrap lg:justify-center p-6 rounded-lg shadow-lg bg-gray-950 hover:bg-gray-900 transition duration-300"
          >
            <div className="w-full lg:w-1/4 flex justify-center">
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                viewport={{ once: false, amount: 0.2 }}
                src={project.image}
                width={150}
                height={150}
                alt="project"
                className="mb-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              />
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
              <a
                className="hover:scale-110 transition-transform duration-300 block"
                href="https://github.com/Hritik2207"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.h6
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.3, duration: 0.6 }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="mb-2 font-semibold text-lg text-purple-300 hover:text-purple-500 transition-all duration-300"
                >
                  {project.title}
                </motion.h6>
              </a>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.4, duration: 0.6 }}
                viewport={{ once: false, amount: 0.2 }}
                className="mb-4 text-gray-300 text-justify"
              >
                {project.description}
              </motion.p>

              <div className="flex flex-wrap">
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.5, duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="mr-2 mt-2 rounded bg-purple-900 px-3 py-1 text-sm font-medium text-white shadow-md hover:bg-purple-700 transition duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
