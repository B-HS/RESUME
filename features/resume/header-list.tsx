import { LangType, translator } from '@shared/translations'
import { WORDS } from '@shared/translations/words'
import { ExternalLinkIcon } from 'lucide-react'
import Link from 'next/link'
import { FC, Fragment } from 'react'

type ResumeHeaderList = {
    type: 'text' | 'link'
    lang: LangType
    items: (Uppercase<(typeof WORDS)[number]> | Lowercase<(typeof WORDS)[number]>)[]
}
export const ResumeHeaderList: FC<ResumeHeaderList> = ({ type, items, lang }) => {
    const t = translator({ lang })
    return (
        <ul className='font-medium text-xs flex items-center'>
            {items.map((key, idx) => {
                return (
                    <Fragment key={key}>
                        {type === 'link' ? (
                            <Link
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-blue-950 inline-flex items-center gap-0.75'
                                href={t(key as (typeof WORDS)[number])}>
                                <ExternalLinkIcon className='size-3.75' strokeWidth={1.25} />
                                {t(key as (typeof WORDS)[number])}
                            </Link>
                        ) : (
                            <li>{t(key as (typeof WORDS)[number])}</li>
                        )}
                        {idx < items.length - 1 && <span className='text-muted-foreground px-0.75'>•</span>}
                    </Fragment>
                )
            })}
        </ul>
    )
}
