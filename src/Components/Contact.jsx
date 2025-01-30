import { motion } from "framer-motion";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.2 }}
        className="my-10 text-center text-4xl font-bold text-purple-400"
      >
        Get in Touch
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-center tracking-tighter bg-gray-950 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 max-w-lg mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}
          className="my-4 text-gray-300 text-lg"
        >
          📍 {CONTACT.address}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}
          className="my-4 text-gray-300 text-lg"
        >
          📞 {CONTACT.phoneNo}
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}
          href={`mailto:${CONTACT.email}`}
          className="border-b text-purple-300 text-lg font-medium hover:text-purple-500 transition-all duration-300"
        >
          ✉️ {CONTACT.email}
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Contact;
