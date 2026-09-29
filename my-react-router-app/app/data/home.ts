import type { IntroductionData } from "~/types/home";

export const introductionData: IntroductionData = {
  greeting: "Hey! I am",
  name: "Luiza",
  title: "Software Engineering",
  description: {
    firstLine:
      "I turn ideas into intuitive digital experiences through code, design, and a touch of creativity.",
    secondLine:
      "Passionate about building modern products that are not only functional, but genuinely enjoyable to use.",
  },
  buttons: [
    {
      label: "Sobre mim",
      type: "filled",
    },
    {
      label: "Download CV",
      type: "outlined",
    },
  ],
};
