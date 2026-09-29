export interface Skill {
  name: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "frontend",
    title: "Front-end",
    skills: [
      { name: "React" },
      { name: "Angular" },
      { name: "Vue.js" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "SCSS" },
      { name: "SASS" },
      { name: "Bootstrap" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: "backend",
    title: "Back-end",
    skills: [
      { name: "Node.js" },
      { name: "C#" },
      { name: "Java" },
      { name: "REST API" },
      { name: "SQL" },
      { name: "MongoDB" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    skills: [{ name: "Flutter" }, { name: "Dart" }],
  },
  {
    id: "ui-ux",
    title: "UI / UX",
    skills: [
      { name: "Figma" },
      { name: "Adobe XD" },
      { name: "UI Design" },
      { name: "UX Design" },
      { name: "Design Systems" },
      { name: "Photoshop" },
    ],
  },
  {
    id: "testing",
    title: "Testing",
    skills: [{ name: "Karma" }, { name: "Jasmine" }, { name: "Cypress" }],
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    skills: [
      { name: "Docker" },
      { name: "Azure DevOps" },
      { name: "Git" },
      { name: "Jira" },
    ],
  },
];
