export default async () => {
    const siteUrl = 'https://resume.gumyo.net'
    const langs = ['ko', 'en', 'jp'] as const

    return [
        ...langs.map((lang) => ({
            url: siteUrl + `/${lang}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        })),
    ]
}
