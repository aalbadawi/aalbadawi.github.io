export const languagesList = [
  { name: "🇺🇸 | English", value: "en" },
  { name: "🇸🇦 | العربية", value: "ar" },
] as const;

export type LanguageType = (typeof languagesList)[number]["value"];
