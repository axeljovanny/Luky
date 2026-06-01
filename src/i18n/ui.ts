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

        // Navigation
        "nav.menu": "MENÚ",
        "nav.close": "CERRAR",
        "nav.cta": "COMIENZA TU PROYECTO",
        "nav.inicio": "Inicio",
        "nav.portafolio": "Portafolio",
        "nav.equipo": "Equipo",
        "nav.contacto": "Contacto",
        "nav.redes": "Redes",
        "nav.theme": "Tema",
        "nav.lang": "Idioma",
        "footer.phraseLine1": "UNA FRASE",
        "footer.phraseLine2": "PERRONA, PERO LLAMATIVA",
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

        // Navigation
        "nav.menu": "MENU",
        "nav.close": "CLOSE",
        "nav.cta": "START YOUR PROJECT",
        "nav.inicio": "Home",
        "nav.portafolio": "Portfolio",
        "nav.equipo": "Team",
        "nav.contacto": "Contact",
        "nav.redes": "Social",
        "nav.theme": "Theme",
        "nav.lang": "Language",
        "footer.phraseLine1": "A COOL PHRASE",
        "footer.phraseLine2": "BUT CATCHY",
    },
} as const;

export type UIKeys = keyof (typeof ui)[typeof defaultLang];
