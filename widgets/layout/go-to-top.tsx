'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

import { cn } from '@shared/lib/utils'
import { Button } from '@shared/ui/button'

export const GoToTop = () => {
    const [isTop, setIsTop] = useState(true)

    useEffect(() => {
        window.onscroll = () => setIsTop(window.scrollY === 0)
        return () => {
            window.onscroll = null
        }
    })

    return (
        !isTop && (
            <Button
                variant='secondary'
                size='icon'
                className={cn('fixed bottom-9 right-9 transition-all z-50 size-9 border border-primary/10', !isTop && 'opacity-100')}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <ArrowUp />
            </Button>
        )
    )
}
