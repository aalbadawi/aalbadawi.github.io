import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enTranslation from "../../public/locales/en/translation.json";
import arTranslation from "../../public/locales/ar/translation.json";

export const defaultNS = "translation";
export const resources = {
  en: {
    translation: enTranslation,
  },
  ar: {
    translation: arTranslation,
  },
} as const;

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      defaultNS,
      fallbackLng: "en",
      debug: false,
      detection: {
        order: ["cookie", "localStorage", "navigator"],
        caches: ["cookie", "localStorage"],
      },
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
} else {
  i18n.addResourceBundle("en", "translation", enTranslation, true, true);
  i18n.addResourceBundle("ar", "translation", arTranslation, true, true);
}

export default i18n;
