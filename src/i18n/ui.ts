// src/i18n/ui.ts
// ─── Constantes de textos para ES y EN ───

export const languages = {
    es: "Español",
    en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

export const ui = {
    es: {
        // Hero - Typing phrase
        "hero.typingPhrase": "Estamos construyendo algo increíble...",

        // Hero - Footer signature
        "hero.designedBy": "Diseñado por",
        "hero.brandName": "LUCKY DUCKY",

        // Meta / SEO
        "meta.description":
            "Lucky Ducky Studio - Diseño y desarrollo web creativo",
        "meta.title": "Lucky Ducky Studio",

        // Lang toggle
        "lang.toggle": "EN",
        "lang.label": "Cambiar idioma",
    },
    en: {
        // Hero - Typing phrase
        "hero.typingPhrase": "We're building something incredible...",

        // Hero - Footer signature
        "hero.designedBy": "Designed by",
        "hero.brandName": "LUCKY DUCKY",

        // Meta / SEO
        "meta.description":
            "Lucky Ducky Studio - Creative web design and development",
        "meta.title": "Lucky Ducky Studio",

        // Lang toggle
        "lang.toggle": "ES",
        "lang.label": "Switch language",
    },
} as const;

export type UIKeys = keyof (typeof ui)[typeof defaultLang];
