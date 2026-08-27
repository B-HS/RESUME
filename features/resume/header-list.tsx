import { cn } from '@shared/lib/utils'
import { LangType, translator } from '@entities/translations'
import { WORDS } from '@entities/translations/words'
import { ExternalLinkIcon, MailIcon } from 'lucide-react'
import Link from 'next/link'
import { FC, Fragment } from 'react'

type ResumeHeaderList = {
    type: 'text' | 'link' | 'mail'
    lang: LangType
    items: (Uppercase<(typeof WORDS)[number]> | Lowercase<(typeof WORDS)[number]>)[]
    isFullWidth?: boolean
}

export const ResumeHeaderList: FC<ResumeHeaderList> = ({ type, items, lang, isFullWidth }) => {
    const LinkIcon = type === 'mail' ? MailIcon : ExternalLinkIcon
    const t = translator({ lang })
    return (
        <ul className={cn('font-medium text-sm flex items-center', isFullWidth && 'w-full')}>
            {items.map((key, idx) => {
                return (
                    <li key={key}>
                        {['link', 'mail'].includes(type) ? (
                            <Link
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-blue-950 inline-flex items-center gap-0.75'
                                href={type === 'mail' ? `mailto:${t(key as (typeof WORDS)[number])}` : t(key as (typeof WORDS)[number])}>
                                <LinkIcon className='size-3.75' strokeWidth={1.25} />
                                {t(key as (typeof WORDS)[number])}
                            </Link>
                        ) : (
                            t(key as (typeof WORDS)[number])
                        )}
                        {idx < items.length - 1 && <span className='text-muted-foreground px-1'>•</span>}
                    </li>
                )
            })}
        </ul>
    )
}
