import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants/index.js";
import profilePic from "../assets/check.jpg";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="border-b border-neutral-800 pb-10 lg:mb-35 bg-gradient-to-b from-black via-gray-900 to-black text-white pt-32"
    >
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 px-6 lg:px-12">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="pb-8 text-5xl lg:text-7xl font-extrabold tracking-tight text-purple-400 animate-pulse"
            >
              Hritik Arora
            </motion.h1>

            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer | Cloud Engineer
            </motion.span>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="my-4 max-w-xl py-6 font-light tracking-tight text-gray-300 text-justify bg-gray-950 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="rounded-full overflow-hidden shadow-xl hover:shadow-purple-500 transition duration-300 hover:scale-105"
            >
              <img
                className="w-60 lg:w-72 object-cover rounded-full border-4 border-gray-800 hover:border-purple-400 transition duration-300"
                src={profilePic}
                alt="Hritik"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
