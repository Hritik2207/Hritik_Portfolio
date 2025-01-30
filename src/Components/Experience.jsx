import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants/index.js";

const Experience = () => {
  return (
    <div className="border-b border-neutral-800 pb-10 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <h1 className="my-20 text-center text-4xl font-bold text-purple-400">
        Experience
      </h1>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mb-8 flex flex-wrap lg:justify-center p-6 rounded-lg shadow-lg bg-gray-950 hover:bg-gray-900 transition duration-300"
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm font-semibold text-blue-400">
                {experience.year}
              </p>
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-lg">
                {experience.role} -{" "}
                <span className="text-sm text-purple-300 font-medium">
                  {experience.company}
                </span>
              </h6>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                viewport={{ once: false, amount: 0.2 }}
                className="mb-5 text-gray-300 text-justify"
              >
                {experience.description}
              </motion.p>

              <div className="flex flex-wrap">
                {experience.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.4, duration: 0.5 }}
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

export default Experience;
