import logo from "../assets/MyLogo.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx2 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a
              href="https://github.com/Hritik2207"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform duration-200"
          >
              <FaGithub />
          </a>
          <a
              href="https://www.linkedin.com/in/hritik-arora22/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform duration-200"
          >
              <FaLinkedin />
          </a>

          {/* AWS Icon */}
          <a
              href="https://www.credly.com/badges/c24d2154-d700-47ab-82d4-b98812be9979/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform duration-200"
          >
              <FaAws />
          </a>

          {/* Microsoft Icon */}
          <a
              href="https://learn.microsoft.com/en-gb/users/hritikshashiarora-0833/credentials/49077ed993af9d45"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform duration-200"
          >
              <FaMicrosoft />
          </a>
      </div>
    </nav>
  );
};
export default Navbar;
