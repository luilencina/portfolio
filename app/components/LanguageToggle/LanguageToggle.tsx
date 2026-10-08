import { useLanguage } from "~/context/LanguageContext";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const label =
    language === "pt"
      ? "Mudar idioma para inglês"
      : "Switch language to Portuguese";

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={label}
      title={label}
      className="flex h-9 min-w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--background-secon)] px-2 text-xs font-bold text-[var(--color-text)] transition-all duration-200 hover:scale-105 hover:bg-[var(--color-surface-hover)] active:scale-95 focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] focus-visible:outline-offset-2"
    >
      {language === "pt" ? "EN" : "PT"}
    </button>
  );
}
