import { motion } from "framer-motion";
import aboutImg from "../assets/International-students.jpg";
import { ABOUT_TEXT } from "../constants/index.js";

const About = () => {
  return (
    <div className="border-b border-neutral-800 pb-8 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <h1 className="my-16 text-center text-4xl font-bold text-purple-400">
        About <span className="text-gray-300">Me</span>
      </h1>

      <div className="flex flex-wrap items-center">
        {/* Image Section with Smooth Animation */}
        <div className="w-full lg:w-1/2 lg:p-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
          >
            <img
              className="rounded-2xl w-full max-w-md"
              src={aboutImg}
              alt="About"
            />
          </motion.div>
        </div>

        {/* Text Section (Fixed Spacing) */}
        <div className="w-full lg:w-1/2 px-4 lg:px-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-justify text-gray-300 text-base bg-gray-950 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 
                       leading-relaxed tracking-normal w-full max-w-xl"
          >
            {ABOUT_TEXT}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
