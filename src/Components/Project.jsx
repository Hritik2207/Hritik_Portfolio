import { PROJECTS } from "../constants/index.js";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                alt="project"
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <a
                className="hover:scale-125 transition-transform duration-200"
                href="https://github.com/Hritik2207"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h6 className="mb-2 font-semibold text-base hover:text-lg transition-all duration-200">
                  {project.title}
                </h6>
              </a>
              <p className={"mb-4 text-neutral-400"}>{project.description}</p>
              {project.technologies.map((tech, idx) => (
                <span
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
