import type { MetadataRoute } from 'next'
import { getLanguageUrl, LANGUAGE_ALTERNATES, LAST_MODIFIED, SUPPORTED_LANGUAGES } from '@shared/constants/seo'

const sitemap = () => {
    return SUPPORTED_LANGUAGES.map((language) => ({
        url: getLanguageUrl(language),
        lastModified: LAST_MODIFIED,
        changeFrequency: 'monthly',
        priority: 1,
        alternates: {
            languages: LANGUAGE_ALTERNATES,
        },
    })) satisfies MetadataRoute.Sitemap
}

export default sitemap
