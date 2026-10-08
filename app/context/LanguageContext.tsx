import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "pt";

interface LanguageContextData {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextData | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    const browserLanguage = navigator.language.toLowerCase();

    if (savedLanguage === "en" || savedLanguage === "pt") {
      setLanguage(savedLanguage);
    } else {
      setLanguage(browserLanguage.startsWith("pt") ? "pt" : "en");
    }

    setIsInitialized(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("language", language);
    }
  }, [isInitialized, language]);

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "en" ? "pt" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
