import type { AboutData } from "~/types/about";

import aboutImage from "../assets/images/zubat.gif";

export const aboutData: AboutData = {
  title: "About Me",
  description: [
    "I'm a software engineer passionate about creating digital experiences that combine technology, design, and usability.",
    "With experience across front-end and full-stack development, I enjoy turning complex ideas into intuitive and meaningful products.",
    "Beyond code, I'm always exploring new technologies, improving my design skills, and looking for creative ways to solve problems.",
  ],
  image: {
    src: aboutImage,
    alt: "Luiza working on software development",
  },
};
