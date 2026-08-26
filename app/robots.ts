import { MetadataRoute } from 'next'

export default () => {
    const siteUrl = 'https://resume.gumyo.net'
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${siteUrl}/sitemap.xml`,
    } satisfies MetadataRoute.Robots
}