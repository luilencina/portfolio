import type { Experience } from "~/data/experience";
import type { Project } from "~/types/projects";

export interface TechnologyRelation {
  type: "experience" | "project";
  id: string;
  title: string;
}

export const getTechnologyRelations = (
  technologyId: string,
  experiences: Experience[],
  projects: Project[] = [],
): TechnologyRelation[] => {
  const experienceRelations: TechnologyRelation[] = experiences
    .filter((experience) => experience.technologies.includes(technologyId))
    .map((experience) => ({
      type: "experience",
      id: experience.id,
      title: experience.title,
    }));

  const projectRelations: TechnologyRelation[] = projects
    .filter((project) => project.technologies.includes(technologyId))
    .map((project) => ({
      type: "project",
      id: project.id,
      title: project.title,
    }));

  return [...experienceRelations, ...projectRelations];
};
