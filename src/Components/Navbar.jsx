import logo from "../assets/kevinRushLogo.png";
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
        <FaGithub />
        <FaLinkedin />
        <FaAws />
        <FaMicrosoft />
      </div>
    </nav>
  );
};
export default Navbar;
