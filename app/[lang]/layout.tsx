import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Noto_Sans_KR } from 'next/font/google'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { FC, PropsWithChildren } from 'react'
import { translator } from '@entities/translations'
import { VirtualScroll } from '@features/theme/virtual-scroll'
import {
    getLanguageUrl,
    isSupportedLanguage,
    LANGUAGE_ALTERNATES,
    LANGUAGE_CONFIG,
    OPEN_GRAPH_IMAGE,
    SITE_NAME,
    SUPPORTED_LANGUAGES,
} from '@shared/constants/seo'
import { GoToTop } from '@widgets/layout/go-to-top'

type LayoutProps = {
    params: Promise<{ lang: string }>
}

export const dynamicParams = false

export const generateStaticParams = () => SUPPORTED_LANGUAGES.map((lang) => ({ lang }))

export const generateMetadata = async ({ params }: LayoutProps) => {
    const { lang } = await params

    if (!isSupportedLanguage(lang)) notFound()

    const t = translator({ lang })
    const title = t('SEO_TITLE')
    const description = t('SEO_DESCRIPTION')
    const canonicalUrl = getLanguageUrl(lang)
    const imageUrl = `/${lang}/opengraph-image`

    return {
        title: { absolute: title },
        description,
        alternates: {
            canonical: canonicalUrl,
            languages: LANGUAGE_ALTERNATES,
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName: SITE_NAME,
            locale: LANGUAGE_CONFIG[lang].openGraphLocale,
            alternateLocale: SUPPORTED_LANGUAGES.filter((language) => language !== lang).map((language) => LANGUAGE_CONFIG[language].openGraphLocale),
            type: 'profile',
            firstName: 'Hyunseok',
            lastName: 'Byun',
            username: 'B-HS',
            images: [{ url: imageUrl, ...OPEN_GRAPH_IMAGE }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [{ url: imageUrl, alt: OPEN_GRAPH_IMAGE.alt }],
        },
    } satisfies Metadata
}

const notoSans = Noto_Sans_KR({
    subsets: ['latin'],
    variable: '--font-noto-sans-kr',
})

const Layout: FC<PropsWithChildren<LayoutProps>> = async ({ params, children }) => {
    const { lang } = await params

    if (!isSupportedLanguage(lang)) notFound()

    return (
        <html lang={LANGUAGE_CONFIG[lang].htmlLang} className={notoSans.variable}>
            <body className='max-w-3xl mx-auto min-h-dvh w-full antialiased'>
                {children}
                <VirtualScroll />
                <GoToTop />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}

export default Layout
