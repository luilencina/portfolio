import { useLanguage } from "~/context/LanguageContext";
import { projectsData as englishProjectsData } from "~/data/en/projects";
import { projectsData as portugueseProjectsData } from "~/data/pt/projects";
import Chip from "~/components/chips/Chip";
import ButtonComponent from "~/components/button/ButtonComponent";

export default function Projects() {
  const { language } = useLanguage();
  const projectsData =
    language === "pt" ? portugueseProjectsData : englishProjectsData;

  return (
    <section
      id="projects"
      className="min-h-screen bg-background text-text transition-colors duration-300 px-6 py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex items-center justify-between mb-20">
          <h3 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl md:text-5x">
            {language === "pt" ? "Meus projetos" : "My Projects"}
          </h3>
          {/* <ButtonComponent iconOnly icon="filter" /> */}
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projectsData.map((project) => (
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
                <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>

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
      </div>
    </section>
  );
}
