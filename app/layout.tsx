import { cn } from '@shared/utils'
import { ThemeProvider } from '@widgets/provider'
import { M_PLUS_Rounded_1c } from 'next/font/google'
import { FC, ReactNode } from 'react'
import './globals.css'

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

const fontRound = M_PLUS_Rounded_1c({
    subsets: ['latin'],
    variable: '--font-mplus',
    weight: ['100', '300', '500', '700', '800', '900'],
})

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <html lang='ko' suppressHydrationWarning>
            <body
                className={cn(
                    'flex flex-col min-h-dvh h-full font-mplus antialiased max-w-(--breakpoint-lg) mx-auto px-6 xl:px-0 min-w-[335px]',
                    fontRound.variable,
                )}>
                <ThemeProvider attribute='class' defaultTheme='light' enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}

export default RootLayout
