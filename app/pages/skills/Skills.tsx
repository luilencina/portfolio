import { useMemo } from "react";

import Chip from "~/components/chips/Chip";
import { technologies } from "~/data/technolgies";
import { experienceData } from "~/data/experience";
// import { projectsData } from "~/data/projects";
import { getTechnologyRelations } from "~/utils/technologyRelations";

export default function Skills() {
  const skillCategories = useMemo(() => {
    return Object.values(
      technologies.reduce<
        Record<
          string,
          {
            id: string;
            title: string;
            technologies: typeof technologies;
          }
        >
      >((categories, technology) => {
        if (!categories[technology.categoryId]) {
          categories[technology.categoryId] = {
            id: technology.categoryId,
            title: technology.categoryLabel,
            technologies: [],
          };
        }

        categories[technology.categoryId].technologies.push(technology);

        return categories;
      }, {}),
    );
  }, []);

  const infiniteSkills = [...skillCategories, ...skillCategories];

  const handleTechnologyClick = (technologyId: string) => {
    const relations = getTechnologyRelations(
      technologyId,
      experienceData,
      // projectsData,
    );

    if (relations.length === 0) {
      console.log(
        `Nenhuma experiência ou projeto encontrado para: ${technologyId}`,
      );

      return;
    }

    if (relations.length > 1) {
      console.log(
        `Mais de um resultado encontrado para: ${technologyId}`,
        relations,
      );

      return;
    }

    const [relation] = relations;

    const element = document.getElementById(`${relation.type}-${relation.id}`);

    if (!element) {
      console.warn(`Elemento não encontrado: ${relation.type}-${relation.id}`);

      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-start px-6 overflow-hidden bg-background text-text transition-colors duration-300 lg:justify-center"
    >
      <div className="w-full max-w-6xl">
        <h3 className="mb-8 pb-8 text-3xl font-extrabold tracking-tight text-text sm:text-4xl md:text-5xl">
          Skills & Technologies
        </h3>

        <div className="relative w-full overflow-x-auto overflow-y-hidden scrollbar-none">
          <div className="skills-scroll-track flex w-max gap-6 p-6">
            {infiniteSkills.map((category, index) => (
              <div
                key={`${category.id}-${index}`}
                className="w-[280px] shrink-0 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background-secondary)] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] sm:w-[320px]"
              >
                <h3 className="mb-5 mt-2 text-xl font-semibold text-text">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((technology) => (
                    <Chip
                      key={technology.id}
                      label={technology.label}
                      variant="outlined"
                      clickable
                      onClick={() => handleTechnologyClick(technology.id)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
