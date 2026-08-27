export const SITE_URL = 'https://resume.gumyo.net'
export const SITE_NAME = 'Hyunseok Byun Resume'
export const PERSON_NAME = 'Hyunseok Byun'
export const DEFAULT_LANGUAGE = 'ko'
export const LAST_MODIFIED = '2026-08-27T00:00:00+09:00'

export const SUPPORTED_LANGUAGES = ['ko', 'en', 'jp'] as const

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]

export const LANGUAGE_CONFIG = {
    ko: { htmlLang: 'ko', openGraphLocale: 'ko_KR' },
    en: { htmlLang: 'en', openGraphLocale: 'en_US' },
    jp: { htmlLang: 'ja', openGraphLocale: 'ja_JP' },
} satisfies Record<SupportedLanguage, { htmlLang: string; openGraphLocale: string }>

export const LANGUAGE_ALTERNATES = {
    ko: `${SITE_URL}/ko`,
    en: `${SITE_URL}/en`,
    ja: `${SITE_URL}/jp`,
    'x-default': `${SITE_URL}/${DEFAULT_LANGUAGE}`,
}

export const PROFILE_LINKS = ['https://github.com/B-HS', 'https://blog.gumyo.net']

export const OPEN_GRAPH_IMAGE = {
    width: 1200,
    height: 630,
    alt: 'Hyunseok Byun, Frontend Engineer resume',
}

export const PROFILE_SKILLS = [
    'Next.js',
    'React',
    'Vue',
    'TypeScript',
    'Spring Boot',
    'Hono',
    'Design Systems',
    'Web Performance',
    'AWS',
    'Cloudflare',
]

export const isSupportedLanguage = (value: string): value is SupportedLanguage => SUPPORTED_LANGUAGES.some((language) => language === value)

export const getLanguageUrl = (language: SupportedLanguage) => `${SITE_URL}/${language}`
