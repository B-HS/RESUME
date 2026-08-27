import { LangType, translator } from '@entities/translations'
import { WORDS } from '@entities/translations/words'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

type SectionProps = { lang: LangType; workName: string; workList: string[] }

const SectionBadges = ({ items }: { items: string[] }) => (
    <section className='flex items-center gap-1 text-xs text-primary/50'>
        {items.map((item, idx) => (
            <span key={idx} className='border p-0.5 rounded border-secondary hover:bg-accent text-nowrap'>
                {item}
            </span>
        ))}
    </section>
)

export const ResumeSection: FC<SectionProps> = ({ lang, workList, workName }) => {
    type WorkWords = (typeof WORDS)[number]
    const t = translator({ lang })

    const getWorkText = (key: string, item?: string) => {
        const fullKey = item ? `WORK_${workName}_${item}_${key}` : `WORK_${workName}_${key}`
        return t(fullKey as WorkWords)
    }

    return (
        <div className='p-1.5'>
            <div className='flex justify-between items-center'>
                <h3 className='text-md font-bold'>{getWorkText('NAME')}</h3>
                <p className='text-sm'>{getWorkText('LOCATION')}</p>
            </div>
            <div className='flex justify-between items-center'>
                <h4 className='text-sm font-medium text-foreground/75'>{getWorkText('ROLE')}</h4>
                <p className='text-xs'>{getWorkText('PERIOD')}</p>
            </div>
            {workList.map((item) => {
                const site = getWorkText('SITE', item)
                const itemTitle = getWorkText('TITLE', item)
                const desc = getWorkText('DESCRIPTION', item)

                return (
                    <ul key={item} className='text-sm py-2'>
                        <li className='list-disc ml-5 font-medium'>
                            {site.startsWith('http') ? (
                                <div className='inline-flex items-center gap-0.5 w-full justify-between'>
                                    <Link target='_blank' href={site} className='text-blue-950 hover:underline inline-flex items-center'>
                                        {itemTitle}
                                        <ExternalLink className='inline-block size-3' />
                                    </Link>
                                    <SectionBadges items={getWorkText('SKILLS', item).split('|') || []} />
                                </div>
                            ) : (
                                <div className='inline-flex justify-between items-center w-full'>
                                    <span>{itemTitle}</span>
                                    <SectionBadges items={getWorkText('SKILLS', item).split('|') || []} />
                                </div>
                            )}

                            <ul className='mt-1 font-normal'>
                                {desc.split('\n').map((line, idx) => (
                                    <li className='list-[circle] ml-5' key={idx}>
                                        {line.trim()}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                )
            })}
        </div>
    )
}
