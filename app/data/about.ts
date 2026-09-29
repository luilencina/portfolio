import type { AboutData } from "~/types/about";

import aboutImage from "../assets/images/gengar.gif";

export const aboutData: AboutData = {
  title: "About Me",
  description: [
    "I’m a dedicated and curious software developer who genuinely enjoys building products that solve real problems. I work mainly with front-end development, but I’m comfortable navigating the full stack when needed. What motivates me most is turning complex requirements into clean, functional, and intuitive solutions.",
    "Throughout my career, I’ve worked with technologies like React, JavaScript, HTML, and CSS, building interfaces, integrating APIs, and improving application flows. I care a lot about code quality, maintainability, and user experience, and I’m always looking for ways to improve both the product and the development process. I learn fast, take ownership of what I do, and value teamwork and clear communication. I believe the best results come from collaboration, organization, and a shared sense of responsibility.",
    "I’m constantly evolving as a professional and looking for opportunities where I can grow, contribute meaningfully, and create impact alongside the people I work with.",
  ],
  image: {
    src: aboutImage,
    alt: "Luiza working on software development",
  },
};
