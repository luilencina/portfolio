import type { Route } from "./+types/LandingLayout";
import { Header } from "~/components/header/Header";

// sections
import About from "~/pages/about/About";
import Contact from "~/pages/contact/Contact";
import Experience from "~/pages/experience/Experience";
import Home from "~/pages/home/Home";
import Projects from "~/pages/projects/Projects";
import Skills from "~/pages/skills/Skills";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Luiza Lencina | Portfolio" }];
}

export default function LandingLayout() {
  return (
    <>
      <Header />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
