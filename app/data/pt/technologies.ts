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
  // Testes
  {
    id: "karma",
    label: "Karma",
    categoryId: "testing",
    categoryLabel: "Testes",
  },
  {
    id: "jasmine",
    label: "Jasmine",
    categoryId: "testing",
    categoryLabel: "Testes",
  },
  {
    id: "cypress",
    label: "Cypress",
    categoryId: "testing",
    categoryLabel: "Testes",
  },
  // DevOps e ferramentas
  {
    id: "docker",
    label: "Docker",
    categoryId: "devops",
    categoryLabel: "DevOps e ferramentas",
  },
  {
    id: "azure-devops",
    label: "Azure DevOps",
    categoryId: "devops",
    categoryLabel: "DevOps e ferramentas",
  },
  {
    id: "github",
    label: "GitHub",
    categoryId: "devops",
    categoryLabel: "DevOps e ferramentas",
  },
  {
    id: "json",
    label: "JSON",
    categoryId: "devops",
    categoryLabel: "DevOps e ferramentas",
  },
  // UI / UX
  {
    id: "figma",
    label: "Figma",
    categoryId: "ui-ux",
    categoryLabel: "UI / UX",
  },
  // Dispositivos móveis
  {
    id: "flutter",
    label: "Flutter",
    categoryId: "mobile",
    categoryLabel: "Dispositivos móveis",
  },
  {
    id: "dart",
    label: "Dart",
    categoryId: "mobile",
    categoryLabel: "Dispositivos móveis",
  },
  // Realidade virtual
  {
    id: "unity",
    label: "Unity",
    categoryId: "vr",
    categoryLabel: "Realidade virtual",
  },
  {
    id: "steamvr",
    label: "SteamVR",
    categoryId: "vr",
    categoryLabel: "Realidade virtual",
  },
  {
    id: "virtual-reality",
    label: "Realidade virtual",
    categoryId: "vr",
    categoryLabel: "Realidade virtual",
  },
  {
    id: "3d-modeling",
    label: "Modelagem 3D",
    categoryId: "vr",
    categoryLabel: "Realidade virtual",
  },
  // Outros
  {
    id: "po-ui",
    label: "PO UI",
    categoryId: "frontend",
    categoryLabel: "Front-end",
  },
];
