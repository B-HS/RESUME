import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { notFound } from 'next/navigation'
import type { FC } from 'react'
import { webResumeQueryOptions } from '@entities/web-resume/web-resume.api'
import {
    getLanguageUrl,
    isSupportedLanguage,
    LANGUAGE_CONFIG,
    PROFILE_LINKS,
    PROFILE_SKILLS,
    SITE_NAME,
    SITE_URL,
    SUPPORTED_LANGUAGES,
    PERSON_NAME,
} from '@shared/constants/seo'
import { Resume } from '@widgets/resume'

type PageProps = {
    params: Promise<{ lang: string }>
}

const Page: FC<PageProps> = async ({ params }) => {
    const { lang } = await params

    if (!isSupportedLanguage(lang)) notFound()

    const queryClient = new QueryClient()
    const { webResume, updatedAt } = await queryClient.fetchQuery(webResumeQueryOptions())
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
                name: webResume.seo.title[lang],
                description: webResume.seo.description[lang],
                inLanguage: LANGUAGE_CONFIG[lang].htmlLang,
                dateModified: updatedAt,
                isPartOf: { '@id': `${SITE_URL}/#website` },
                mainEntity: {
                    '@type': 'Person',
                    '@id': `${SITE_URL}/#person`,
                    name: PERSON_NAME,
                    alternateName: ['변현석', 'ビョン・ヒョンソク'],
                    url: canonicalUrl,
                    email: `mailto:${webResume.profile.email}`,
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
            <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
            <main>
                <HydrationBoundary state={dehydrate(queryClient)}>
                    <Resume lang={lang} />
                </HydrationBoundary>
            </main>
        </>
    )
}

export default Page
