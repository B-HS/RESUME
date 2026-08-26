import { ENGLISH_TRANSLATIONS } from './en'
import { JAPANESE_TRANSLATIONS } from './jp'
import { KOREAN_TRANSLATIONS } from './ko'
import { WORDS } from './words'

export type LangType = Uppercase<keyof typeof TRANSLATIONS> | Lowercase<keyof typeof TRANSLATIONS>

const TRANSLATIONS = {
    KO: KOREAN_TRANSLATIONS,
    JP: JAPANESE_TRANSLATIONS,
    EN: ENGLISH_TRANSLATIONS,
}

const translator =
    ({ lang }: { lang: LangType }) =>
    (word: (typeof WORDS)[number]) => {
        const language = lang.toUpperCase() as keyof typeof TRANSLATIONS
        if (!TRANSLATIONS[language]) console.warn(`Language ${language} is not supported.`)
        return (TRANSLATIONS[language] || 'ko')[word] || `NO_TRANSLATION_FOR_${word}`
    }

export { TRANSLATIONS, translator }
