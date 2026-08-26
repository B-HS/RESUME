import { ENGLISH_TRANSLATIONS } from './en'
import { JAPANESE_TRANSLATIONS } from './jp'
import { KOREAN_TRANSLATIONS } from './ko'
import { WORDS } from './words'

const TRANSLATIONS = {
    KO: KOREAN_TRANSLATIONS,
    JP: JAPANESE_TRANSLATIONS,
    EN: ENGLISH_TRANSLATIONS,
}

const translator =
    ({ lang }: { lang: string }) =>
    (word: (typeof WORDS)[number]) => {
        const language = lang.toUpperCase() as keyof typeof TRANSLATIONS
        if (!TRANSLATIONS[language]) console.warn(`Language ${language} is not supported.`)
        return (TRANSLATIONS[language] || 'ko')[word]
    }

export { TRANSLATIONS, translator }
