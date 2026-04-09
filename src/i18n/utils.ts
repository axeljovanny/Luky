// src/i18n/utils.ts
// ─── Helpers para obtener textos según idioma activo ───

import { ui, defaultLang, type Lang } from "./ui";
import type { UIKeys } from "./ui";

/**
 * Devuelve la función `t(key)` para el idioma indicado.
 * Uso en Astro frontmatter:
 *   const lang = getLangFromCookie(Astro.request) ?? defaultLang;
 *   const t = useTranslations(lang);
 *   t("hero.typingPhrase") // → "Estamos construyendo algo increíble..."
 */
export function useTranslations(lang: Lang) {
    return function t(key: UIKeys): string {
        return ui[lang][key] ?? ui[defaultLang][key];
    };
}

/**
 * Lee el idioma activo desde la cookie `lang`.
 * Devuelve el lang si es válido, o defaultLang como fallback.
 */
export function getLangFromCookie(cookieHeader: string | null): Lang {
    if (!cookieHeader) return defaultLang;
    const match = cookieHeader.match(/(?:^|;\s*)lang=([^;]+)/);
    const candidate = match?.[1];
    if (candidate === "es" || candidate === "en") return candidate;
    return defaultLang;
}
