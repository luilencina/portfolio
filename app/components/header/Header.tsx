import { useState } from "react";

import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { menuHeader } from "../../data/menuHeader";

import logo from "../../assets/images/Portfolio.png";
import { getAssetPath } from "~/utils/helpers/getImage";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--color-background)] transition-colors duration-300">
      <div className="mx-auto flex h-[var(--header-height)] w-[calc(100%-2rem)] max-w-[var(--container-max-width)] items-center justify-between gap-8">
        <a
          href="#home"
          className="inline-flex items-center transition-opacity duration-200 hover:opacity-80"
        >
          <img
            src={getAssetPath(logo)}
            alt="Luiza Lencina"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <nav
            className="flex items-end gap-6"
            aria-label="Navegação principal"
          >
            {menuHeader.map((item) => (
              <a
                key={item.id}
                className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
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
        className={`overflow-hidden bg-[var(--color-background)] transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="mx-auto flex w-[calc(100%-2rem)] max-w-[var(--container-max-width)] flex-col py-4"
          aria-label="Navegação mobile"
        >
          {menuHeader.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={handleMenuItemClick}
              className="border-b border-[var(--color-border)] py-4 text-sm font-medium text-[var(--color-text-secondary)] transition-colors last:border-b-0 hover:text-[var(--color-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
