import { notFound } from 'next/navigation'
import type { FC } from 'react'
import { translator } from '@entities/translations'
import {
    getLanguageUrl,
    isSupportedLanguage,
    LANGUAGE_CONFIG,
    LAST_MODIFIED,
    PERSON_NAME,
    PROFILE_LINKS,
    PROFILE_SKILLS,
    SITE_NAME,
    SITE_URL,
    SUPPORTED_LANGUAGES,
} from '@shared/constants/seo'
import { Resume } from '@widgets/resume'

type PageProps = {
    params: Promise<{ lang: string }>
}

const Page: FC<PageProps> = async ({ params }) => {
    const { lang } = await params

    if (!isSupportedLanguage(lang)) notFound()

    const t = translator({ lang })
    const canonicalUrl = getLanguageUrl(lang)
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': `${SITE_URL}/#website`,
                url: SITE_URL,
                name: SITE_NAME,
                alternateName: ['변현석 이력서', 'Hyunseok Byun Resume'],
                inLanguage: SUPPORTED_LANGUAGES.map((language) => LANGUAGE_CONFIG[language].htmlLang),
            },
            {
                '@type': 'ProfilePage',
                '@id': `${canonicalUrl}#profile-page`,
                url: canonicalUrl,
                name: t('SEO_TITLE'),
                description: t('SEO_DESCRIPTION'),
                inLanguage: LANGUAGE_CONFIG[lang].htmlLang,
                dateModified: LAST_MODIFIED,
                isPartOf: { '@id': `${SITE_URL}/#website` },
                mainEntity: {
                    '@type': 'Person',
                    '@id': `${SITE_URL}/#person`,
                    name: PERSON_NAME,
                    alternateName: ['변현석', 'ビョン・ヒョンソク'],
                    url: canonicalUrl,
                    email: 'mailto:hs@gumyo.net',
                    jobTitle: ['Frontend Engineer', 'AI Engineer'],
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'Seoul',
                        addressCountry: 'KR',
                    },
                    sameAs: PROFILE_LINKS,
                    knowsAbout: PROFILE_SKILLS,
                    alumniOf: [
                        { '@type': 'CollegeOrUniversity', name: 'Korea Cyber University' },
                        { '@type': 'CollegeOrUniversity', name: 'Masan University' },
                    ],
                },
            },
        ],
    }

    return (
        <>
            <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\u003c') }} />
            <main>
                <Resume lang={lang} />
            </main>
        </>
    )
}

export default Page
