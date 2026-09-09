import type { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

import type { LanguageType } from "@/util/nav-items";
import { languagesList } from "@/util/nav-items";

export default function LanguageList({
  setIsLanguageMenuOpen,
  setIsMobileMenuOpen,
}: {
  setIsLanguageMenuOpen: Dispatch<SetStateAction<boolean>>;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { i18n } = useTranslation();

  const changeLanguage = (language: LanguageType) => {
    i18n.changeLanguage(language);
    setIsLanguageMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <ul className="py-1 font-medium divide-y divide-slate-100 dark:divide-slate-800" role="none">
      {languagesList.map((lang) => {
        const isActive = Boolean(i18n.language?.startsWith(lang.value));
        return (
          <li key={lang.value}>
            <button
              type="button"
              onClick={() => changeLanguage(lang.value)}
              className={`flex w-full items-center justify-between px-3 py-2 text-start text-xs rounded-lg transition-all ${
                isActive
                  ? "bg-orange-500/10 font-bold text-orange-600 dark:bg-orange-500/15 dark:text-orange-400"
                  : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-zinc-800/80"
              }`}
              role="menuitem"
            >
              <div className="inline-flex items-center gap-2 whitespace-nowrap">
                {lang.name}
              </div>
              {isActive && (
                <i className="fas fa-check text-[10px] text-orange-500 dark:text-orange-400" />
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
