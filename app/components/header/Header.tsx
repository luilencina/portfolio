import { useEffect, useState } from "react";

import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { menuHeader } from "../../data/menuHeader";

import logo from "../../assets/images/Portfolio.png";
import { getAssetPath } from "~/utils/helpers/getImage";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const updateActiveSection = () => {
      const headerBottom =
        document.querySelector("header")?.getBoundingClientRect().bottom ?? 0;
      let currentSection = menuHeader[0]?.href ?? "#home";

      for (const item of menuHeader) {
        const section = document.getElementById(item.href.slice(1));

        if (
          section &&
          section.getBoundingClientRect().top <= headerBottom + 1
        ) {
          currentSection = item.href;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 relative w-full bg-[var(--color-background)] transition-colors duration-300">
      <div className="mx-auto flex h-[var(--header-height)] w-[calc(100%-2rem)] max-w-[var(--container-max-width)] items-center justify-end gap-8">
        <div className="hidden items-center gap-8 md:flex">
          <nav
            className="flex items-end gap-6"
            aria-label="Navegação principal"
          >
            {menuHeader.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={handleMenuItemClick}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[var(--color-primary)] text-[var(--color-text-white)]"
                      : "text-[var(--color-text-secondary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-text-white)]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)]"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            <i
              className={`bi ${isMenuOpen ? "bi-x-lg" : "bi-list"} text-2xl`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute left-0 top-full w-full overflow-hidden bg-[var(--color-background)] transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="mx-auto flex w-[calc(100%-2rem)] max-w-[var(--container-max-width)] flex-col py-4"
          aria-label="Navegação mobile"
        >
          {menuHeader.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={handleMenuItemClick}
                className={`border-b border-[var(--color-border)] py-4 text-sm font-medium transition-colors last:border-b-0 ${
                  isActive
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
