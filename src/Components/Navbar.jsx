import { motion } from "framer-motion";
import logo from "../assets/MyLogo.png";
import { FaGithub, FaLinkedin, FaAws, FaMicrosoft } from "react-icons/fa";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mb-20 flex items-center justify-between py-4 px-6 bg-black bg-opacity-70 fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md"
    >
      <div className="flex flex-shrink-0 items-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src={logo}
          alt="logo"
          className="mx-2 w-20 hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="flex items-center justify-center gap-6 text-2xl text-white">
        {[
          {
            icon: <FaGithub />,
            link: "https://github.com/Hritik2207",
          },
          {
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/hritik-arora22/",
          },
          {
            icon: <FaAws />,
            link: "https://www.credly.com/badges/c24d2154-d700-47ab-82d4-b98812be9979/public_url",
          },
          {
            icon: <FaMicrosoft />,
            link: "https://learn.microsoft.com/en-gb/users/hritikshashiarora-0833/credentials/49077ed993af9d45",
          },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="hover:scale-125 hover:text-purple-400 transition-transform duration-300"
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
