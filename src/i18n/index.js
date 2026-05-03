import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import fr from "./locales/fr.json";

const STORAGE_KEY = "portfolio-locale";
export const SUPPORTED_LOCALES = ["fr", "en"];

function detectBrowserLocale() {
  if (typeof navigator === "undefined") return "fr";
  const locale = (navigator.language || "fr").toLowerCase();
  return locale.startsWith("fr") ? "fr" : "en";
}

function resolveInitialLocale() {
  if (typeof localStorage !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LOCALES.includes(stored)) return stored;
  }
  return detectBrowserLocale();
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: resolveInitialLocale(),
  fallbackLocale: "fr",
  messages: { fr, en },
});

export function setLocale(locale) {
  const normalized = SUPPORTED_LOCALES.includes(locale) ? locale : "fr";
  i18n.global.locale.value = normalized;
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("lang", normalized);
  }
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(STORAGE_KEY, normalized);
  }
}

if (typeof document !== "undefined") {
  document.documentElement.setAttribute("lang", i18n.global.locale.value);
}

export default i18n;
