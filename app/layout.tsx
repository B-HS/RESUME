import type { Metadata } from 'next'
import type { FC, PropsWithChildren } from 'react'
import './globals.css'

export const metadata: Metadata = {
    title: 'Resume',
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => children

export default RootLayout
