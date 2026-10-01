import type { IntroductionData } from "~/types/home";

export const introductionData: IntroductionData = {
  greeting: "Hi!, I am",
  name: "Luiza Lencina",
  title: "Software Engineer",
  description: {
    firstLine:
      "I turn ideas into intuitive digital experiences through code, design, and a touch of creativity.",
    secondLine:
      "Passionate about building modern products that are not only functional, but genuinely enjoyable to use.",
  },
  buttons: [
    // {
    //   label: "Sobre mim",
    //   type: "filled",
    // },
    {
      label: "Download CV",
      type: "outlined",
    },
  ],
  socials: [
    {
      network: "github",
      href: "https://github.com/luilencina",
      label: "Github",
    },
    {
      network: "linkedin",
      href: "https://link.com",
      label: "Linkedin",
    },
    {
      network: "email",
      href: "luizalencina@hotmail.com",
      label: "Email",
    },
  ],
};
