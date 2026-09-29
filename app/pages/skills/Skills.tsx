import { skillsData } from "~/data/skills";

export default function Skills() {
  const infiniteSkills = [...skillsData, ...skillsData];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-start lg:justify-center overflow-hidden px-6 py-12 bg-background text-text transition-colors duration-300"
    >
      <div className="w-full max-w-6xl">
        <h3 className="mb-8 pb-8 text-3xl font-extrabold tracking-tight text-text sm:text-4xl md:text-5xl">
          Skills & Technologies
        </h3>

        <div className="relative w-full overflow-hidden p-6">
          <div className="flex w-max animate-skills-scroll gap-6 hover:[animation-play-state:paused]">
            {infiniteSkills.map((category, index) => (
              <div
                key={`${category.id}-${index}`}
                className="w-[280px] shrink-0 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background-secondary)] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] sm:w-[320px]"
              >
                <h3 className="mb-5 mt-2 text-xl font-semibold color-text">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-full border border-[var(--color-primary)] bg-[var(--color-background-secondary)] px-3 py-1.5 text-sm font-medium transition-colors duration-200 hover:bg-[var(--color-primary)] hover:text-white"
                    >
                      {skill.name}
                    </span>
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
