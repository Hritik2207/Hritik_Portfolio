import { motion } from "framer-motion";
import aboutImg from "../assets/International-students.jpg";
import { ABOUT_TEXT } from "../constants/index.js";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>

      <div className="flex flex-wrap">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false, amount: 0.2 }} // Activates on scroll
              className="rounded-2xl"
              src={aboutImg}
              alt="about"
            />
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false, amount: 0.2 }} // Activates on scroll
              className="text-justify"
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
