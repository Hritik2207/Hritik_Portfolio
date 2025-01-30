import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Javascript, as well as back-end technologies like Java(SpringBoot), MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a passionate cloud enthusiast with certifications in AWS Certified Developer and AZ-900. With a strong foundation in full-stack development using Spring Boot and React, I thrive on tackling complex challenges and delivering innovative solutions that empower businesses in the digital era. Combining my technical and analytical skills, I am eager to collaborate with forward-thinking teams to build scalable, high-performing applications that drive success.`;

export const EXPERIENCES = [
  {
    startMonth: "May",
    startYear: "2024",
    endMonth: "January",
    endYear: "2025",
    role: "Research Analyst Intern ",
    company: "Saint Mary’s University",
    description: `Investigate biases in machine learning models trained on datasets with demographic information, such as gender, age, disability, race, and ethnicity. The primary objective is to assess how these factors might influence critical business decisions, including loan approvals and hiring processes.`,
    technologies: ["Python", "Panada", "Random Forest", "CART"],
  },
  {
    startMonth: "January",
    startYear: "2021",
    endMonth: "June",
    endYear: "2022",
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
      "Developed a personal portfolio website using React and Tailwind CSS, showcasing projects, technical skills, and contact information. Implemented AWS Amplify for CI/CD automation, ensuring seamless deployment and scalability.",
    technologies: ["HTML", "CSS", "React", "Tailwind", "AWS"],
  },
  {
    title: "WeatherWise",
    image: project4,
    description:
      "A React Native application designed to provide users with real-time weather information based on their current or manually entered preference.",
    technologies: ["JSX", "CSS", "React", "Expo-sqlite"],
  },
  {
    title: "To-Do Application",
    image: project5,
    description:
      "A feature-rich Progressive Web App (PWA) using React that makes managing tasks effortless, even in offline mode.",
    technologies: ["JSX", "CSS", "React", "Progressive Web App", "IndexedDB "],
  },
];

export const CONTACT = {
  address: "Canada",
  phoneNo: "+1 (782) 641-1802",
  email: "2207hritik@gmail.com",
};
