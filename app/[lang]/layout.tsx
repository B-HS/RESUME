import { FC, PropsWithChildren } from 'react'

type LayoutProps = {
    params: Promise<{ lang: string }>
}

const Layout: FC<PropsWithChildren<LayoutProps>> = async ({ params, children }) => {
    const { lang } = await params

    return (
        <html lang={lang}>
            <body>{children}</body>
        </html>
    )
}

export default Layout
