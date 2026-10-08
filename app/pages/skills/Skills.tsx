import { useMemo } from "react";

import Chip from "~/components/chips/Chip";
import { useLanguage } from "~/context/LanguageContext";
import { technologies as englishTechnologies } from "~/data/en/technologies";
import { experienceData as englishExperienceData } from "~/data/en/experience";
import { projectsData as englishProjectsData } from "~/data/en/projects";
import { technologies as portugueseTechnologies } from "~/data/pt/technologies";
import { experienceData as portugueseExperienceData } from "~/data/pt/experience";
import { projectsData as portugueseProjectsData } from "~/data/pt/projects";
import { getTechnologyRelations } from "~/utils/technologyRelations";

export default function Skills() {
  const { language } = useLanguage();
  const technologies =
    language === "pt" ? portugueseTechnologies : englishTechnologies;
  const experienceData =
    language === "pt" ? portugueseExperienceData : englishExperienceData;
  const projectsData =
    language === "pt" ? portugueseProjectsData : englishProjectsData;
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
  }, [technologies]);

  const infiniteSkills = [...skillCategories, ...skillCategories];

  const handleTechnologyClick = (technologyId: string) => {
    const relations = getTechnologyRelations(
      technologyId,
      experienceData,
      projectsData,
    );

    const [relation] = relations;
    if (!relation) {
      return;
    }

    const element = document.getElementById(`${relation.type}-${relation.id}`);
    if (!element) {
      console.warn(`Elemento não encontrado: ${relation.type}-${relation.id}`);

      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center px-6 py-20 overflow-hidden bg-background text-text transition-colors duration-300 lg:justify-center"
    >
      <div className="w-full max-w-6xl">
        <h3 className="mb-8 pb-8 text-3xl font-extrabold tracking-tight text-text sm:text-4xl md:text-5xl">
          {language === "pt"
            ? "Habilidades e tecnologias"
            : "Skills & Technologies"}
        </h3>

        <div className="relative w-full overflow-x-auto overflow-y-hidden scrollbar-none">
          <div className="skills-scroll-track flex w-max gap-6 p-6">
            {infiniteSkills.map((category, index) => (
              <div
                key={`${category.id}-${index}`}
                className="w-[280px] shrink-0 rounded-2xl bg-[var(--color-background-secondary)] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] sm:w-[320px]"
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
