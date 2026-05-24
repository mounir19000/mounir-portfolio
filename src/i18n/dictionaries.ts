import "server-only";
import type { Locale } from "./config";

const dictionaries = {
  en: () => import("./messages/en").then((module) => module.default),
  fr: () => import("./messages/fr").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
