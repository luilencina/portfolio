import type { Experience } from "~/data/en/experience";
import type { Project } from "~/types/projects";

export interface TechnologyRelation {
  type: "experience" | "project";
  id: string;
  title: string;
}

const normalizeTechnology = (technology: string) => {
  const normalized = technology.trim().toLowerCase();

  if (normalized === "c#") {
    return "csharp";
  }

  return normalized.replace(/[^a-z0-9]/g, "");
};

export const getTechnologyRelations = (
  technologyId: string,
  experiences: Experience[],
  projects: Project[] = [],
): TechnologyRelation[] => {
  const normalizedTechnologyId = normalizeTechnology(technologyId);
  const experienceRelations: TechnologyRelation[] = experiences
    .filter((experience) =>
      experience.technologies.some(
        (technology) =>
          normalizeTechnology(technology) === normalizedTechnologyId,
      ),
    )
    .map((experience) => ({
      type: "experience",
      id: experience.id,
      title: experience.title,
    }));

  const projectRelations: TechnologyRelation[] = projects
    .filter((project) =>
      project.technologies.some(
        (technology) =>
          normalizeTechnology(technology) === normalizedTechnologyId,
      ),
    )
    .map((project) => ({
      type: "project",
      id: project.id,
      title: project.title,
    }));

  return [...experienceRelations, ...projectRelations];
};
