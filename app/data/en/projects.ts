import type { Project } from "~/types/projects";
import { getAssetPath } from "~/utils/helpers/getImage";
import bgImage from "~/assets/images/bg-image.jpg";

export const projectsData: Project[] = [
  {
    id: "e-sefaz",
    title: "E-SEFAZ",
    description:
      "Sistema desenvolvido para gestão e consulta de informações fiscais, utilizando arquitetura baseada em Micro Frontends.",
    image: getAssetPath(bgImage),
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "C#",
      "MongoDB",
      "SQL",
      "Docker",
      "Azure DevOps",
    ],
    links: [
      {
        label: "View Project",
        url: "http://klaytonlima.com.br",
        variant: "filled",
      },
    ],
  },

  {
    id: "photographers-restaurants",
    title: "Photographers & Restaurants",
    description:
      "Aplicação desenvolvida para conectar fotógrafos e restaurantes.",
    image: getAssetPath(bgImage),
    technologies: [
      "React",
      "Angular",
      "JavaScript",
      "HTML",
      "SASS",
      "Bootstrap",
      "MongoDB",
      "SQL",
    ],
    links: [
      {
        label: "Description",
        url: "",
      },
      {
        label: "Code",
        url: "",
        variant: "outlined",
      },
    ],
  },

  {
    id: "company-website",
    title: "Company Website",
    description:
      "Website institucional desenvolvido com foco em interface responsiva e experiência do usuário.",
    image: getAssetPath(bgImage),
    technologies: ["Vue", "MongoDB", "Figma"],
    links: [
      {
        label: "View Project",
        url: "http://klaytonlima.com.br",
      },
    ],
  },
  {
    id: "teste-website",
    title: "Teste Website",
    description:
      "Website institucional desenvolvido com foco em interface responsiva e experiência do usuário.",
    image: getAssetPath(bgImage),
    technologies: ["Vue", "MongoDB", "Figma"],
    links: [
      {
        label: "View Project",
        url: "http://klaytonlima.com.br",
      },
    ],
  },
];
