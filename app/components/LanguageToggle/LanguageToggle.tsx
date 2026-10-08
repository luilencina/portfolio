import { useLanguage } from "~/context/LanguageContext";
import ButtonComponent from "../button/ButtonComponent";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  const label =
    language === "pt"
      ? "Mudar idioma para inglês"
      : "Switch language to Portuguese";

  return (
    <ButtonComponent
      type="button"
      label={language === "pt" ? "EN" : "PT"}
      onClick={toggleLanguage}
      aria-label={label}
      title={label}
      variant="outlined"
      color="primary"
      className="h-9 min-w-9 shrink-0 !border-[var(--color-border)] !bg-[var(--background-secon)] !px-2 !text-xs !font-bold !text-[var(--color-text)] hover:scale-105 hover:!bg-[var(--color-surface-hover)] hover:!text-[var(--color-text)] active:scale-95"
    />
  );
}
