// import { M_PLUS_Rounded_1c } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.sass'
import dynamic from 'next/dynamic'
const Provider = dynamic(() => import('./provider'), { ssr: false })

// const mplusrounded = M_PLUS_Rounded_1c({
//     subsets: ['latin'],
//     weight: ['400', '700'],
// })
const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang='ko'>
            <body>
                <Provider>{children}</Provider>
            </body>
        </html>
    )
}

export default RootLayout
