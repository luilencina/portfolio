import { useTheme } from "../../context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"
      }
      title={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--background-secon)] text-[var(--color-text)] transition-all duration-200 hover:scale-105 hover:bg-[var(--color-surface-hover)] active:scale-95 focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] focus-visible:outline-offset-2"
    >
      <i
        className={`bi ${
          theme === "light" ? "bi-moon" : "bi-sun"
        } text-lg leading-none`}
        aria-hidden="true"
      />
    </button>
  );
}
