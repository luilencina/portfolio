import { projectsData } from "~/data/projects";
import Chip from "~/components/chips/Chip";
import { getAssetPath } from "~/utils/helpers/getImage";
import ButtonComponent from "~/components/button/ButtonComponent";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-background text-text transition-colors duration-300 px-6 py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h3 className="mb-20 text-3xl font-extrabold tracking-tight text-text sm:text-4xl md:text-5x">
          My Projects
        </h3>

        <div className="grid gap-8 md:grid-cols-3">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-xl border border-border"
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
