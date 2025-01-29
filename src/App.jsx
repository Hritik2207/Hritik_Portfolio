import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About.jsx";
import Technologies from "./Components/Technologies.jsx";
import Experience from "./Components/Experience.jsx";
import Project from "./Components/Project.jsx";
import Contact from "./Components/Contact.jsx";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950
          bg-[radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.3), rgba(255,255,255,0))]"
        ></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default App;
