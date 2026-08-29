'use client'

import { ArrowUp } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { SUPPORTED_LANGUAGES } from '@shared/constants/seo'
import { cn } from '@shared/lib/utils'
import { Button } from '@shared/ui/button'

export const GoToTop = () => {
    const [isTop, setIsTop] = useState(true)

    const pathname = usePathname()
    const currentLanguage = pathname.split('/')[1]

    useEffect(() => {
        const handleScroll = () => setIsTop(window.scrollY === 0)
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className='fixed bottom-9 right-9 z-50 flex flex-col items-center gap-1.5'>
            <div className='flex flex-col overflow-hidden rounded-md border border-primary/10 bg-secondary text-secondary-foreground'>
                {SUPPORTED_LANGUAGES.map((language) => (
                    <Link
                        key={language}
                        href={`/${language}`}
                        aria-label={`${language} 페이지로 이동`}
                        className={cn(
                            'px-2 py-1 text-center text-xs font-medium uppercase transition-colors hover:bg-accent',
                            language === currentLanguage && 'bg-accent font-extrabold',
                        )}>
                        {language}
                    </Link>
                ))}
            </div>
            <Button
                variant='secondary'
                size='icon'
                aria-label='맨 위로'
                className={cn(
                    'size-9 border border-primary/10 transition-opacity duration-300',
                    isTop ? 'opacity-0 pointer-events-none' : 'opacity-100',
                )}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <ArrowUp />
            </Button>
        </div>
    )
}
