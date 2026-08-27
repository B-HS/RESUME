import type { Metadata } from 'next'
import type { FC, PropsWithChildren } from 'react'
import { PERSON_NAME, SITE_NAME, SITE_URL } from '@shared/constants/seo'
import './globals.css'

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: SITE_NAME,
    applicationName: SITE_NAME,
    authors: [{ name: PERSON_NAME, url: 'https://blog.gumyo.net' }],
    creator: PERSON_NAME,
    publisher: PERSON_NAME,
    category: 'technology',
    referrer: 'origin-when-cross-origin',
    formatDetection: {
        address: false,
        email: false,
        telephone: false,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => children

export default RootLayout
