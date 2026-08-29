import type { SupportedLanguage } from '@shared/constants/seo'

export type LocalizedText = Record<SupportedLanguage, string>

export const localizedFrom = (value: string): LocalizedText => ({ ko: value, en: value, jp: value })

export const withLangValue = (text: LocalizedText, lang: SupportedLanguage, value: string): LocalizedText => ({ ...text, [lang]: value })
