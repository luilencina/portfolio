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
    title: "Developer Senior",
    subtitle: "InterOp",
    description:
      "Owned and led the development of a core product, responsible for its evolution, maintenance, and stability, while planning tasks, implementing full-stack features, mentoring junior developers, and collaborating directly with clients to deliver high-quality solutions.",
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
    title: "Fullstack Developer Pleno",
    subtitle: "Nelogica",
    description:
      "Led the development and maintenance of a core product, managing the full lifecycle from planning to delivery, organizing tasks in Jira, developing new features, mentoring junior developers, and collaborating directly with clients to deliver effective solutions.",
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
    title: "Fullstack Developer Pleno",
    subtitle: "TOTVS",
    description:
      "Worked on two large-scale enterprise applications, developing new features, maintaining system stability, implementing improvements to reduce recurring issues, and contributing to generic APIs that supported internal legal teams.",
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
    title: "Intern",
    subtitle: "Software Innovation Laboratory (LIS)",
    description:
      "Contributed to the development of Virtual Reality (VR) applications using Unity and SteamVR, creating interactive environments, 3D objects, and user interfaces for immersive experiences.",
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
    title: "Fullstack Developer and UI/UX Designer",
    subtitle: "Noc Technology",
    description:
      "Responsible for designing and developing all product screens for mobile and desktop applications, maintaining existing features, fixing bugs, and implementing new functionalities based on business requirements for a platform connecting photographers and restaurants to support small businesses.",
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
