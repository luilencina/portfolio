import React from "react";
import { aboutData } from "~/data/about";
import { getAssetPath } from "~/utils/helpers/getImage";

export default function About() {
  const { title, description, image } = aboutData;

  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 py-20 bg-background text-text transition-colors duration-300"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full lg:w-[60%] flex flex-col items-start">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text mb-8">
            <span className="text-primary">A</span>bout{" "}
            <span className="text-primary">M</span>e
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
    </section>
  );
}
