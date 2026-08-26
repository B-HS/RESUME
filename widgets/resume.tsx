import { ResumeHeaderList } from '@features/resume/header-list'
import { LangType, translator } from '@shared/translations'
import { FC } from 'react'

type ResumeWidget = { lang: LangType }

export const Resume: FC<ResumeWidget> = ({ lang }) => {
    const t = translator({ lang })
    return (
        <section className='flex flex-col pt-3 p-1.5 gap-2'>
            <div className='flex items-baseline gap-1.25'>
                <h1 className='text-xl font-extrabold'>
                    {t('FIRST_NAME')} {t('LAST_NAME')}
                </h1>
                {lang !== 'en' && (
                    <p className='flex items-center gap-0.5 text-xs text-muted-foreground font-semibold'>
                        <span>{t('LAST_NAME_TRANSLATION')}</span>
                        <span>{t('FIRST_NAME_TRANSLATION')}</span>
                    </p>
                )}
            </div>
            <div className='flex flex-col gap-0.75'>
                <ResumeHeaderList type='text' lang={lang} items={['JOB_TITLE', 'LOCATION']} />
                <ResumeHeaderList type='link' lang={lang} items={['GITHUB', 'BLOG']} />
            </div>
            <ul className='flex flex-col gap-0.5 text-sm font-medium'>
                {t('INTRODUCE')
                    .replace(/\n/g, '<br />')
                    .split('<br />')
                    .map((line, idx) => (
                        <li key={idx}>• {line}</li>
                    ))}
            </ul>
        </section>
    )
}
