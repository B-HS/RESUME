import type { MetadataRoute } from 'next'
import { fetchWebResume } from '@entities/web-resume/web-resume.api'
import { getLanguageUrl, LANGUAGE_ALTERNATES, SUPPORTED_LANGUAGES } from '@shared/constants/seo'

const sitemap = async () => {
    const { updatedAt } = await fetchWebResume()
    return SUPPORTED_LANGUAGES.map((language) => ({
        url: getLanguageUrl(language),
        lastModified: updatedAt,
        changeFrequency: 'monthly',
        priority: 1,
        alternates: {
            languages: LANGUAGE_ALTERNATES,
        },
    })) satisfies MetadataRoute.Sitemap
}

export default sitemap
