import React from "react";
import { useLanguage } from "~/context/LanguageContext";
import { aboutData as englishAboutData } from "~/data/en/about";
import { aboutData as portugueseAboutData } from "~/data/pt/about";
import { getAssetPath } from "~/utils/helpers/getImage";

export default function About() {
  const { language } = useLanguage();
  const aboutData = language === "pt" ? portugueseAboutData : englishAboutData;
  const { title, description, image, education } = aboutData;

  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 py-20 bg-background text-text transition-colors duration-300"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-16">
        {/* About */}
        <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-[60%] flex flex-col items-start">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text mb-8">
              {title}
            </h2>

            <div className="max-w-2xl space-y-5">
              {description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg text-text-secondary leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
            <img
              src={getAssetPath(image.src)}
              alt={image.alt}
              className="w-64 sm:w-80 lg:w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>

        {/* Education */}
        <div className="grid gap-5 sm:grid-cols-[20%_1fr_1fr] items-center">
          <div className="flex flex-col items-start">
            <h2
              className="text-4xl sm:text-5xl font-bold uppercase tracking-tight"
              style={{ color: "var(--color-primary)" }}
            >
              {language === "pt" ? "Edu" : "Edu"}
            </h2>

            <h2
              className="text-4xl sm:text-5xl font-bold uppercase tracking-tight"
              style={{ color: "var(--color-primary)" }}
            >
              {language === "pt" ? "cação" : "cation"}
            </h2>
          </div>

          {education.map((item) => (
            <article
              key={item.id}
              className="rounded-xl bg-[var(--color-background-secondary)] p-6 transition-colors duration-300"
            >
              <div className="flex flex-col gap-2">
                <h5 className="font-semibold text-text">{item.title}</h5>

                <p className="text-text-secondary">{item.institution}</p>

                <span className="text-sm font-medium text-primary">
                  {item.period}
                </span>

                {item.description && (
                  <p className="mt-2 text-sm leading-relaxed text-text/70">
                    {item.description}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
