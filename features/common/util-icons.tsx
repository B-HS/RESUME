'use client'

import { Button, buttonVariants } from '@shared/ui/button'
import { ArrowUp, MoonStar, SunDim } from 'lucide-react'
import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const UtilIconsComponent = () => {
    const [isTop, setIsTop] = useState(true)
    const { setTheme, theme } = useTheme()

    useEffect(() => {
        window.onscroll = () => setIsTop(window.scrollY === 0)
        return () => {
            window.onscroll = null
        }
    })

    return (
        <section className='flex flex-col gap-2 fixed bottom-7 right-7 items-end'>
            {theme === 'dark' ? (
                <MoonStar
                    className={buttonVariants({ variant: 'secondary', size: 'icon', className: 'p-2 cursor-pointer' })}
                    onClick={() => setTheme('light')}
                />
            ) : (
                <SunDim
                    className={buttonVariants({ variant: 'secondary', size: 'icon', className: 'p-2 cursor-pointer' })}
                    onClick={() => setTheme('dark')}
                />
            )}
            {!isTop && (
                <Button
                    className={buttonVariants({ variant: 'secondary', size: 'icon', className: 'p-2 cursor-pointer' })}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <ArrowUp />
                </Button>
            )}
        </section>
    )
}

export const UtilIcons = dynamic(() => Promise.resolve(UtilIconsComponent), { ssr: false })
