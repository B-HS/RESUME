import { M_PLUS_Rounded_1c } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'
import dynamic from 'next/dynamic'

const Provider = dynamic(() => import('./provider'), { ssr: false })

const font = M_PLUS_Rounded_1c({
    subsets: ['latin'],
    weight: ['100', '300', '500', '700'],
    variable: '--font-mplus-rounded-1c',
})

export const metadata = {
    metadataBase: new URL('https://resume.gumyo.net/'),
    title: 'Resume - Hyunseok Byun',
    description: 'Hyunseok Byun Resume',
    authors: [{ name: 'Hyunseok Byun', url: 'https://github.com/B-HS' }],
    openGraph: {
        title: 'Resume - Hyunseok Byun',
        description: 'Hyunseok Byun Resume',
        siteName: 'Hyunseok Byun Resume',
        url: 'https://resume.gumyo.net',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Resume - Hyunseok Byun',
        description: 'Hyunseok Byun Resume',
        creator: 'Hyunseok Byun',
    },
    robots: {
        index: true,
        follow: true,
    },
}

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang='ko'>
            <body className={`${font.className}`}>
                <Provider>{children}</Provider>
            </body>
        </html>
    )
}

export default RootLayout
