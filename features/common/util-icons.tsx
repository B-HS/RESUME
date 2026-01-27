'use client'

import { Button, buttonVariants } from '@shared/ui/button'
import { ArrowUp, MoonStar, SunDim } from 'lucide-react'
import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const UtilIconsComponent = ({ lang }: { lang: 'ko' | 'jp' }) => {
    const [language, setLanguage] = useState<'ko' | 'jp'>(lang)
    const router = useRouter()
    const setSearchParams = (params: { lang: 'ko' | 'jp' }) => {
        setLanguage(params.lang)
        router.push(`?lang=${params.lang}`)
    }
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
            {language === 'ko' ? (
                <Button
                    className={buttonVariants({ variant: 'secondary', size: 'icon', className: 'p-2 cursor-pointer border opacity-80' })}
                    onClick={() => setSearchParams({ lang: 'jp' })}>
                    日本語
                </Button>
            ) : (
                <Button
                    className={buttonVariants({ variant: 'secondary', size: 'icon', className: 'p-2 cursor-pointer border opacity-80' })}
                    onClick={() => setSearchParams({ lang: 'ko' })}>
                    한글
                </Button>
            )}
            {theme === 'dark' ? (
                <MoonStar
                    className={buttonVariants({ variant: 'secondary', size: 'icon', className: 'p-2 cursor-pointer border opacity-80' })}
                    onClick={() => setTheme('light')}
                />
            ) : (
                <SunDim
                    className={buttonVariants({ variant: 'secondary', size: 'icon', className: 'p-2 cursor-pointer border opacity-80' })}
                    onClick={() => setTheme('dark')}
                />
            )}
            {!isTop && (
                <Button
                    className={buttonVariants({ variant: 'secondary', size: 'icon', className: 'p-2 cursor-pointer border opacity-80' })}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <ArrowUp />
                </Button>
            )}
        </section>
    )
}

export const UtilIcons = dynamic(() => Promise.resolve(UtilIconsComponent), { ssr: false })
