import { LangType, translator } from '@entities/translations'
import { WORDS } from '@entities/translations/words'
import { Separator } from '@shared/ui/separator'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

type SectionProps = { lang: LangType; title: string; workName: string; workList: string[] }

export const ResumeSection: FC<SectionProps> = ({ title, lang, workList, workName }) => {
    type WorkWords = (typeof WORDS)[number]
    const t = translator({ lang })

    const getWorkText = (key: string, item?: string) => {
        const fullKey = item ? `WORK_${workName}_${item}_${key}` : `WORK_${workName}_${key}`
        return t(fullKey as WorkWords)
    }

    return (
        <div>
            <h2 className='text-lg font-extrabold px-1.5 pt-3'>{title}</h2>
            <Separator />
            <div className='p-1.5'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-md font-bold'>{getWorkText('NAME')}</h3>
                    <p className='text-sm'>{getWorkText('LOCATION')}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <h5 className='text-sm font-semibold'>{getWorkText('ROLE')}</h5>
                    <p className='text-sm'>{getWorkText('PERIOD')}</p>
                </div>
                {workList.map((item) => {
                    const site = getWorkText('SITE', item)
                    const itemTitle = getWorkText('TITLE', item)
                    const desc = getWorkText('DESCRIPTION', item)

                    return (
                        <ul key={item} className='text-sm py-2'>
                            <li className='list-disc ml-5'>
                                {site.startsWith('http') ? (
                                    <Link target='_blank' href={site} className='text-blue-950 hover:underline'>
                                        {itemTitle} <ExternalLink className='inline-block w-3 h-3' />
                                    </Link>
                                ) : (
                                    itemTitle
                                )}
                                <ul className='mt-1'>
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
        </div>
    )
}
