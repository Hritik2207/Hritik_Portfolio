import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { SiSpringboot, SiPandas, SiMysql } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";

const technologies = [
  { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, delay: 0.1 },
  { icon: <SiSpringboot className="text-7xl text-green-500" />, delay: 0.2 },
  { icon: <FaAws className="text-7xl text-orange-500" />, delay: 0.3 },
  { icon: <VscAzure className="text-7xl text-blue-500" />, delay: 0.4 },
  { icon: <SiPandas className="text-7xl text-blue-400" />, delay: 0.5 },
  { icon: <SiMysql className="text-7xl text-blue-600" />, delay: 0.6 },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <h1 className="my-20 text-center text-4xl font-bold text-purple-400">
        Technologies
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: tech.delay, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="rounded-2xl border-4 border-neutral-800 p-6 shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 bg-gray-950"
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
