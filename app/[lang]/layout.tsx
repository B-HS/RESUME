import { Nanum_Gothic, Noto_Sans_KR } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'
import { VirtualScroll } from '@features/theme/virtual-scroll'
import { GoToTop } from '@widgets/layout/go-to-top'

type LayoutProps = {
    params: Promise<{ lang: string }>
}

const nanumGothic = Noto_Sans_KR({
    subsets: ['latin'],
    variable: '--font-noto-sans-kr',
})

const Layout: FC<PropsWithChildren<LayoutProps>> = async ({ params, children }) => {
    const { lang } = await params

    return (
        <html lang={lang} className={nanumGothic.variable}>
            <body className='max-w-3xl mx-auto min-h-dvh w-full antialiased'>
                {children}
                <VirtualScroll />
                <GoToTop />
            </body>
        </html>
    )
}

export default Layout
