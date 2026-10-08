import type { IntroductionData } from "~/types/home";

export const introductionData: IntroductionData = {
  greeting: "Olá! Eu sou",
  name: "Luiza Lencina",
  title: "Engenheira de Software",
  description: {
    firstLine:
      "Transformo ideias em experiências digitais intuitivas com código, design e criatividade.",
    secondLine:
      "Apaixonada por criar produtos modernos que, além de funcionais, sejam realmente agradáveis de usar.",
  },
  buttons: [
    // {
    //   label: "Sobre mim",
    //   type: "filled",
    // },
    {
      label: "Baixar currículo",
      type: "outlined",
    },
  ],
  socials: [
    {
      network: "github",
      href: "https://github.com/luilencina",
      label: "GitHub",
    },
    {
      network: "linkedin",
      href: "https://linkedin.in/luizalencina",
      label: "LinkedIn",
    },
    {
      network: "email",
      href: "#contact",
      label: "E-mail",
    },
  ],
};
