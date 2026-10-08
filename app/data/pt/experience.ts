export interface Experience {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    id: "interop",
    year: "2025",
    title: "Desenvolvedora Sênior",
    subtitle: "InterOp",
    description:
      "Liderei o desenvolvimento de um produto central, cuidando de sua evolução, manutenção e estabilidade. Também planejei tarefas, implementei funcionalidades full stack, acompanhei desenvolvedores júnior e colaborei diretamente com clientes para entregar soluções de alta qualidade.",
    technologies: [
      "react",
      "typescript",
      "nodejs",
      "csharp",
      "mongodb",
      "sql",
      "nosql",
      "docker",
      "azure-devops",
      "json",
      "github",
      "karma",
      "jasmine",
    ],
  },
  {
    id: "nelogica",
    year: "2024",
    title: "Desenvolvedora Full Stack Pleno",
    subtitle: "Nelogica",
    description:
      "Liderei o desenvolvimento e a manutenção de um produto central, acompanhando todo o ciclo, do planejamento à entrega. Organizei tarefas no Jira, desenvolvi funcionalidades, acompanhei desenvolvedores júnior e colaborei diretamente com clientes para entregar soluções eficazes.",
    technologies: [
      "react",
      "vue",
      "angular",
      "typescript",
      "nodejs",
      "csharp",
      "mongodb",
      "sql",
      "nosql",
      "docker",
      "azure-devops",
      "json",
      "github",
      "karma",
      "jasmine",
    ],
  },
  {
    id: "totvs",
    year: "2021",
    title: "Desenvolvedora Full Stack Pleno",
    subtitle: "TOTVS",
    description:
      "Atuei em duas aplicações corporativas de grande porte, desenvolvendo funcionalidades, mantendo a estabilidade dos sistemas e implementando melhorias para reduzir problemas recorrentes. Também contribuí com APIs genéricas que apoiavam as equipes jurídicas internas.",
    technologies: [
      "react",
      "angular",
      "nodejs",
      "csharp",
      "mongodb",
      "sql",
      "nosql",
      "docker",
      "azure-devops",
      "po-ui",
      "json",
      "github",
      "karma",
      "jasmine",
    ],
  },
  {
    id: "lis",
    year: "2020",
    title: "Estagiária",
    subtitle: "Laboratório de Inovação de Software (LIS)",
    description:
      "Contribuí para o desenvolvimento de aplicações de realidade virtual (RV) com Unity e SteamVR, criando ambientes interativos, objetos 3D e interfaces para experiências imersivas.",
    technologies: [
      "unity",
      "csharp",
      "steamvr",
      "virtual-reality",
      "3d-modeling",
      "html",
      "css",
    ],
  },
  {
    id: "noc",
    year: "2019",
    title: "Desenvolvedora Full Stack e Designer de UI/UX",
    subtitle: "Noc Technology",
    description:
      "Fui responsável por projetar e desenvolver as telas de produtos para aplicativos móveis e desktop, manter funcionalidades existentes, corrigir erros e implementar novos recursos conforme os requisitos do negócio. A plataforma conectava fotógrafos e restaurantes para apoiar pequenos negócios.",
    technologies: [
      "react",
      "angular",
      "javascript",
      "html",
      "sass",
      "bootstrap",
      "mongodb",
      "sql",
    ],
  },
];
