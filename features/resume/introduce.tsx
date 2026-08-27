import { LangType, translator } from '@entities/translations'
import { ResumeHeaderList } from '@features/resume/header-list'
import { FC } from 'react'

type IntroduceProps = { lang: LangType }

export const Introduce: FC<IntroduceProps> = ({ lang }) => {
    const t = translator({ lang })
    return (
        <div className='flex flex-col pt-3 p-1.5 gap-1.5'>
            <div className='leading-tight flex flex-wrap items-baseline gap-1.25'>
                <div className='flex items-baseline gap-1.25'>
                    <h1 className='text-xl font-extrabold'>
                        <ruby>
                            {t('LAST_NAME')}
                            <rt className='font-medium text-muted-foreground'>{lang !== 'en' && t('LAST_NAME_TRANSLATION')}</rt>
                        </ruby>
                        &nbsp;
                        <ruby>
                            {t('FIRST_NAME')}
                            <rt className='font-medium text-muted-foreground'>{lang !== 'en' && t('FIRST_NAME_TRANSLATION')}</rt>
                        </ruby>
                    </h1>
                </div>
                <ResumeHeaderList type='text' lang={lang} items={['JOB_TITLE', 'LOCATION', 'BIRTHDAY']} />
            </div>
            <div className='flex flex-wrap gap-1.25 items-center py-px'>
                <ResumeHeaderList type='mail' lang={lang} items={['EMAIL']} isFullWidth />
                <ResumeHeaderList type='link' lang={lang} items={['GITHUB', 'BLOG']} />
            </div>
            <ul className='flex flex-wrap gap-x-3 gap-y-0.5 text-sm font-medium'>
                {t('INTRODUCE')
                    .replace(/\n/g, '<br />')
                    .split('<br />')
                    .map((line, idx) => (
                        <li className='w-full1' key={idx}>
                            • {line}
                        </li>
                    ))}
            </ul>
        </div>
    )
}
