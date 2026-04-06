"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { getLocaleFromPathname, localizeHref } from "@/lib/i18n";
import { Language, translations } from "@/lib/translations";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [language, setLanguageState] = useState<Language>(() => getLocaleFromPathname(pathname));

  useEffect(() => {
    const pathLanguage = getLocaleFromPathname(pathname);
    setLanguageState(pathLanguage);
    document.documentElement.lang = pathLanguage;
  }, [pathname]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: (nextLanguage: Language) => {
        setLanguageState(nextLanguage);
        document.documentElement.lang = nextLanguage;
        window.localStorage.setItem("smart-choice-language", nextLanguage);
        const query = typeof window !== "undefined" ? window.location.search.replace(/^\?/, "") : "";
        const currentHref = `${pathname}${query ? `?${query}` : ""}`;
        const nextHref = localizeHref(currentHref, nextLanguage);
        router.push(nextHref);
      }
    }),
    [language, pathname, router]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}

export function useTranslation() {
  const { language } = useLanguage();
  return translations[language];
}
