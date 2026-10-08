import { useTheme } from "../../context/ThemeContext";
import ButtonComponent from "../button/ButtonComponent";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isLight = theme === "light";

  return (
    <ButtonComponent
      type="button"
      icon={isLight ? "moon" : "sun"}
      iconOnly
      variant="outlined"
      color="secondary"
      onClick={toggleTheme}
      aria-label={isLight ? "Ativar modo escuro" : "Ativar modo claro"}
      title={isLight ? "Ativar modo escuro" : "Ativar modo claro"}
      className="h-9 w-9 shrink-0 border-[var(--color-border)] bg-[var(--background-secon)] text-[var(--color-text)] hover:scale-105 hover:bg-[var(--color-surface-hover)] active:scale-95"
    />
  );
}
