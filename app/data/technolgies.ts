export interface Technology {
  id: string;
  label: string;
  categoryId: string;
  categoryLabel: string;
}

export const technologies: Technology[] = [
  // Front-end
  {
    id: "react",
    label: "React",
    categoryId: "frontend",
    categoryLabel: "Front-end",
  },
  {
    id: "angular",
    label: "Angular",
    categoryId: "frontend",
    categoryLabel: "Front-end",
  },
  {
    id: "vue",
    label: "Vue.js",
    categoryId: "frontend",
    categoryLabel: "Front-end",
  },
  {
    id: "typescript",
    label: "TypeScript",
    categoryId: "frontend",
    categoryLabel: "Front-end",
  },
  {
    id: "javascript",
    label: "JavaScript",
    categoryId: "frontend",
    categoryLabel: "Front-end",
  },
  {
    id: "html",
    label: "HTML",
    categoryId: "frontend",
    categoryLabel: "Front-end",
  },
  {
    id: "css",
    label: "CSS",
    categoryId: "frontend",
    categoryLabel: "Front-end",
  },
  {
    id: "sass",
    label: "SASS/SCSS",
    categoryId: "frontend",
    categoryLabel: "Front-end",
  },
  {
    id: "bootstrap",
    label: "Bootstrap",
    categoryId: "frontend",
    categoryLabel: "Front-end",
  },

  // Back-end
  {
    id: "nodejs",
    label: "Node.js",
    categoryId: "backend",
    categoryLabel: "Back-end",
  },
  {
    id: "csharp",
    label: "C#",
    categoryId: "backend",
    categoryLabel: "Back-end",
  },
  {
    id: "java",
    label: "Java",
    categoryId: "backend",
    categoryLabel: "Back-end",
  },
  {
    id: "sql",
    label: "SQL",
    categoryId: "backend",
    categoryLabel: "Back-end",
  },
  {
    id: "nosql",
    label: "NoSQL",
    categoryId: "backend",
    categoryLabel: "Back-end",
  },
  {
    id: "mongodb",
    label: "MongoDB",
    categoryId: "backend",
    categoryLabel: "Back-end",
  },

  // Testing
  {
    id: "karma",
    label: "Karma",
    categoryId: "testing",
    categoryLabel: "Testing",
  },
  {
    id: "jasmine",
    label: "Jasmine",
    categoryId: "testing",
    categoryLabel: "Testing",
  },
  {
    id: "cypress",
    label: "Cypress",
    categoryId: "testing",
    categoryLabel: "Testing",
  },

  // DevOps & Tools
  {
    id: "docker",
    label: "Docker",
    categoryId: "devops",
    categoryLabel: "DevOps & Tools",
  },
  {
    id: "azure-devops",
    label: "Azure DevOps",
    categoryId: "devops",
    categoryLabel: "DevOps & Tools",
  },
  {
    id: "github",
    label: "GitHub",
    categoryId: "devops",
    categoryLabel: "DevOps & Tools",
  },
  {
    id: "json",
    label: "JSON",
    categoryId: "devops",
    categoryLabel: "DevOps & Tools",
  },

  // UI / UX
  {
    id: "figma",
    label: "Figma",
    categoryId: "ui-ux",
    categoryLabel: "UI / UX",
  },

  // Mobile
  {
    id: "flutter",
    label: "Flutter",
    categoryId: "mobile",
    categoryLabel: "Mobile",
  },
  {
    id: "dart",
    label: "Dart",
    categoryId: "mobile",
    categoryLabel: "Mobile",
  },

  // Virtual Reality
  {
    id: "unity",
    label: "Unity",
    categoryId: "vr",
    categoryLabel: "Virtual Reality",
  },
  {
    id: "steamvr",
    label: "SteamVR",
    categoryId: "vr",
    categoryLabel: "Virtual Reality",
  },
  {
    id: "virtual-reality",
    label: "Virtual Reality",
    categoryId: "vr",
    categoryLabel: "Virtual Reality",
  },
  {
    id: "3d-modeling",
    label: "3D Modeling",
    categoryId: "vr",
    categoryLabel: "Virtual Reality",
  },

  // Outros
  {
    id: "po-ui",
    label: "PO UI",
    categoryId: "frontend",
    categoryLabel: "Front-end",
  },
];
