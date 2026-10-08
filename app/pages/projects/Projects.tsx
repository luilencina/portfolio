import { useState } from "react";
import { useLanguage } from "~/context/LanguageContext";
import { projectsData as englishProjectsData } from "~/data/en/projects";
import { projectsData as portugueseProjectsData } from "~/data/pt/projects";
import Chip from "~/components/chips/Chip";
import ButtonComponent from "~/components/button/ButtonComponent";

export default function Projects() {
  const { language } = useLanguage();
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    [],
  );
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const projectsData =
    language === "pt" ? portugueseProjectsData : englishProjectsData;
  const availableTechnologies = Array.from(
    new Set(projectsData.flatMap((project) => project.technologies)),
  ).sort((first, second) => first.localeCompare(second));
  const selectedTechnologySet = new Set(selectedTechnologies);
  const filteredProjects =
    selectedTechnologies.length === 0
      ? projectsData
      : projectsData.filter((project) =>
          selectedTechnologies.every((technology) =>
            project.technologies.includes(technology),
          ),
        );

  const toggleTechnology = (technology: string) => {
    setSelectedTechnologies((current) =>
      current.includes(technology)
        ? current.filter((item) => item !== technology)
        : [...current, technology],
    );
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-background text-text transition-colors duration-300 px-6 py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 flex items-center justify-between gap-4">
          <h3 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl md:text-5x">
            {language === "pt" ? "Meus projetos" : "My Projects"}
          </h3>
          <div className="relative shrink-0">
            <ButtonComponent
              iconOnly
              icon="filter"
              aria-label={
                language === "pt"
                  ? "Filtrar projetos por tecnologia"
                  : "Filter projects by technology"
              }
              aria-expanded={isFilterOpen}
              aria-controls="project-technology-filter"
              title={language === "pt" ? "Filtrar projetos" : "Filter projects"}
              onClick={() => setIsFilterOpen((open) => !open)}
              className="relative"
            />
            {selectedTechnologies.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--color-primary)] px-1 text-xs font-semibold text-white">
                {selectedTechnologies.length}
              </span>
            )}

            {isFilterOpen && (
              <div
                id="project-technology-filter"
                className="absolute right-0 z-20 mt-2 max-h-[min(24rem,70vh)] w-64 overflow-y-auto rounded-md border border-[var(--color-border)] bg-[var(--color-background-secondary)] p-4 shadow-lg"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h4 className="font-semibold">
                    {language === "pt" ? "Tecnologias" : "Technologies"}
                  </h4>
                  {selectedTechnologies.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setSelectedTechnologies([])}
                      className="text-sm text-[var(--color-primary)] hover:underline"
                    >
                      {language === "pt" ? "Limpar" : "Clear"}
                    </button>
                  )}
                </div>

                <fieldset className="flex flex-col gap-2">
                  <legend className="sr-only">
                    {language === "pt"
                      ? "Filtrar por tecnologia"
                      : "Filter by technology"}
                  </legend>
                  {availableTechnologies.map((technology) => (
                    <label
                      key={technology}
                      className="flex cursor-pointer items-center gap-2 text-sm text-[var(--color-text)]"
                    >
                      <input
                        type="checkbox"
                        checked={selectedTechnologySet.has(technology)}
                        onChange={() => toggleTechnology(technology)}
                        className="h-4 w-4 accent-[var(--color-primary)]"
                      />
                      {technology}
                    </label>
                  ))}
                </fieldset>
              </div>
            )}
          </div>
        </div>

        <p className="mb-5 text-sm text-text-secondary" aria-live="polite">
          {language === "pt"
            ? `${filteredProjects.length} projetos`
            : `${filteredProjects.length} projects`}
        </p>

        {filteredProjects.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                id={`project-${project.id}`}
                className="flex flex-col overflow-hidden rounded-xl bg-[var(--color-background-secondary)] duration-300 hover:shadow-lg"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-56 w-full object-cover"
                  />
                )}

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mb-5 text-text/70">{project.description}</p>

                  <div className="flex flex-1 flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <Chip key={technology} label={technology} />
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-start gap-2">
                      {project.links?.map((link) => (
                        <ButtonComponent
                          key={link.label}
                          variant={link.variant}
                          label={link.label}
                          onClick={() => window.open(link.url, "_blank")}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="py-12 text-center text-text-secondary">
            {language === "pt"
              ? "Nenhum projeto encontrado para essas tecnologias."
              : "No projects found for these technologies."}
          </p>
        )}
      </div>
    </section>
  );
}
