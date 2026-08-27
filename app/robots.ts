import type { MetadataRoute } from 'next'
import { SITE_URL } from '@shared/constants/seo'

const robots = () => {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${SITE_URL}/sitemap.xml`,
    } satisfies MetadataRoute.Robots
}

export default robots
