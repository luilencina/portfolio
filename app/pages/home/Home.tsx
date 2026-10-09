import React from "react";
import ButtonComponent from "~/components/button/ButtonComponent";
import { useLanguage } from "~/context/LanguageContext";
import { introductionData as englishIntroductionData } from "~/data/en/home";
import { introductionData as portugueseIntroductionData } from "~/data/pt/home";
import slime from "../../assets/images/slime.gif";
import { getAssetPath } from "~/utils/helpers/getImage";
import SocialButton from "~/components/social/SocialButton";
import { downloadFile } from "~/utils/downloadFile";
import espeon from "../../assets/images/espeon.gif";

export default function Home() {
  const { language } = useLanguage();
  const introductionData =
    language === "pt" ? portugueseIntroductionData : englishIntroductionData;
  const { greeting, name, title, description, buttons, socials } =
    introductionData;

  const handleDownloadCV = () => {
    downloadFile(
      getAssetPath("/documents/LuizaLencina-cv.pdf"),
      "Luiza-Lencina-CV.pdf",
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 bg-background text-text transition-colors duration-300"
    >
      <div className="w-full lg:w-[40%] flex justify-center items-center mb-10 lg:mb-0">
        <img
          src={getAssetPath(espeon)}
          alt="Slime"
          className="w-48 sm:w-64 lg:w-[70%] max-w-md h-auto object-contain"
        />
      </div>

      <div className="w-full lg:w-[60%] max-w-4xl flex flex-col items-start">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-text mb-2">
          {greeting} <span className="text-primary">{name}</span>
        </h1>

        <h2 className="text-2xl sm:text-4xl font-bold text-text-secondary mb-6">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-text-secondary max-w-2xl mb-10">
          {description.firstLine}
          <br className="hidden sm:inline" />
          {description.secondLine}
        </p>

        <div className="flex flex-row items-center gap-4 w-full sm:w-auto">
          {buttons.map((button) => (
            <ButtonComponent
              key={button.label}
              variant={button.type}
              label={button.label}
              onClick={handleDownloadCV}
            />
          ))}

          {socials.map((social) => (
            <SocialButton
              key={social.network}
              network={social.network}
              href={social.href}
              label={social.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
