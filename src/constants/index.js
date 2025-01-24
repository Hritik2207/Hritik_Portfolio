import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Javascript, as well as back-end technologies like Java(SpringBoot), MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I thrive on tackling complex challenges and delivering innovative solutions that empower businesses to thrive in the digital era. I'm eager to collaborate with forward-thinking teams, leveraging my technical and analytical prowess to drive success.
.`;

export const EXPERIENCES = [
  {
    year: "2024 - 2025",
    role: "Research Analyst Intern ",
    company: "Saint Mary’s University",
    description: `Investigate biases in machine learning models trained on datasets with demographic information, such as gender, age, disability, race, and ethnicity. The primary objective is to assess how these factors might influence critical business decisions, including loan approvals and hiring processes.`,
    technologies: ["Python", "Panada", "Random Forest", "CART"],
  },
  {
    year: "2021 - 2022",
    role: "Junior Software Developer",
    company: "Delhi Business Directory",
    description: `Developed a website to manage the testbench for testing the infotainment system. The website includes features such as component tracking, testbench location management, testbench booking functionality for efficient utilization of testbench.`,
    technologies: ["Java", "Spring Boot", "React", "MySql"],
  },
];

export const PROJECTS = [
  {
    title: "Hotel Management System ",
    image: project1,
    description:
      "A hotel booking system, focusing on user-friendly features such as viewing available hotels, booking accommodations, adding guests, and generating confirmation numbers upon successful booking.",
    technologies: ["Kotlin", "SpringBoot", "AWS"],
  },
  {
    title: "Brain Buster",
    image: project2,
    description:
      "An Admin Dashboard for a Quiz-Based Website, empowering administrators to efficiently manage quiz categories and quizzes while ensuring database integrity through enforced rules.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind", "AWS"],
  },
];

export const CONTACT = {
  address: "Canada",
  phoneNo: "+1-7826411802",
  email: "1999hritikarora@gmail.com",
};
