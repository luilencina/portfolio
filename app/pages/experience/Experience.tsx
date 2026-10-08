import Chip from "~/components/chips/Chip";
import { useLanguage } from "~/context/LanguageContext";
import type { Experience as ExperienceType } from "~/data/en/experience";

import { experienceData as englishExperienceData } from "~/data/en/experience";
import { technologies as englishTechnologies } from "~/data/en/technologies";
import { experienceData as portugueseExperienceData } from "~/data/pt/experience";
import { technologies as portugueseTechnologies } from "~/data/pt/technologies";

export default function Experience() {
  const { language } = useLanguage();
  const experienceData =
    language === "pt" ? portugueseExperienceData : englishExperienceData;
  const technologies =
    language === "pt" ? portugueseTechnologies : englishTechnologies;

  return (
    <section
      id="experience"
      className="min-h-screen bg-background text-text transition-colors duration-300 px-6"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h3 className="mb-20 text-3xl font-extrabold tracking-tight text-text sm:text-4xl md:text-5xl">
          {language === "pt" ? "Experiência" : "Experience"}
        </h3>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-[var(--color-background-card)] md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {experienceData.map((experience, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={experience.id}
                  id={`experience-${experience.id}`}
                  className="relative grid grid-cols-[32px_1fr] gap-6 md:grid-cols-[1fr_80px_1fr] md:gap-0"
                >
                  <div className={`hidden md:block ${isLeft ? "pr-10" : ""}`}>
                    {isLeft && (
                      <ExperienceCard
                        experience={experience}
                        technologies={technologies}
                        align="right"
                      />
                    )}
                  </div>

                  <div className="relative flex flex-col items-center">
                    <span className="z-10 flex h-15 min-w-15 items-center justify-center rounded-full bg-[var(--color-primary)] px-2 text-xs font-bold text-white shadow-md">
                      {experience.year}
                    </span>
                  </div>

                  <div className={`hidden md:block ${!isLeft ? "pl-10" : ""}`}>
                    {!isLeft && (
                      <ExperienceCard
                        experience={experience}
                        technologies={technologies}
                        align="left"
                      />
                    )}
                  </div>

                  <div className="min-w-0 md:hidden">
                    <ExperienceCard
                      experience={experience}
                      technologies={technologies}
                      align="left"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  experience,
  technologies,
  align,
}: {
  experience: ExperienceType;
  technologies: typeof englishTechnologies;
  align: "left" | "right";
}) {
  return (
    <div
      className={`group rounded-2xl bg-[var(--color-background-secondary)] p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-primary)] hover:text-[var(--color-text-white)] hover:border-[var(--color-primary)] md:${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      <h4 className="text-xl font-bold text-text transition-colors duration-300 group-hover:text-[var(--color-text-white)]">
        {experience.title}
      </h4>

      <p className="mt-1 text-sm font-semibold text-[var(--color-primary)] transition-colors duration-300 group-hover:text-[var(--color-text-white)]">
        {experience.subtitle}
      </p>

      <p className="mt-4 text-sm leading-6 text-text/70 transition-colors duration-300 group-hover:text-[var(--color-text-white)]">
        {experience.description}
      </p>

      <div
        className={`flex w-full flex-wrap gap-2 pt-5 justify-start md:${
          align === "right" ? "justify-end" : "justify-start"
        }`}
      >
        {experience.technologies.map((technologyId) => {
          const technology = technologies.find(
            (item) => item.id === technologyId,
          );

          if (!technology) {
            return null;
          }

          return (
            <Chip
              key={technology.id}
              label={technology.label}
              variant="outlined"
              color="primary"
              className="group-hover:!border-white group-hover:!text-white hover:!bg-white hover:!border-white hover:!text-[var(--color-primary)]"
            />
          );
        })}
      </div>
    </div>
  );
}
