import { skillsData } from "~/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-background text-text transition-colors duration-300"
    >
      <div className="w-full max-w-6xl">
        <h3 className="text-3xl pb-8 sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text mb-8">
          Skills & Technologies
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background-secondary)] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]"
            >
              <h3 className="mb-5 text-xl font-semibold">{category.title}</h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-full border border-[var(--color-primary)] bg-[var(--color-background-secondary)] px-3 py-1.5 text-sm font-medium transition-colors duration-200 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
