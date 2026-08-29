import { FC } from 'react'
import type { WebResumeProfile } from '@entities/web-resume/web-resume.type'
import { ResumeHeaderList } from '@features/resume/header-list'
import type { SupportedLanguage } from '@shared/constants/seo'

type IntroduceProps = { profile: WebResumeProfile; lang: SupportedLanguage }

export const Introduce: FC<IntroduceProps> = ({ profile, lang }) => {
    return (
        <div className='flex flex-col pt-3 p-1.5 gap-1.5'>
            <div className='leading-tight flex flex-wrap items-baseline gap-1.25'>
                <div className='flex items-baseline gap-1.25'>
                    <h1 className='text-xl font-extrabold'>
                        <ruby>
                            {profile.lastName}
                            <rt className='font-medium text-muted-foreground'>{profile.lastNameReading[lang]}</rt>
                        </ruby>
                        &nbsp;
                        <ruby>
                            {profile.firstName}
                            <rt className='font-medium text-muted-foreground'>{profile.firstNameReading[lang]}</rt>
                        </ruby>
                    </h1>
                </div>
                <ResumeHeaderList type='text' items={[profile.jobTitle[lang], profile.location[lang], profile.birthday[lang]]} />
            </div>
            <div className='flex flex-wrap gap-1.25 items-center py-px'>
                <ResumeHeaderList type='mail' items={[profile.email]} isFullWidth />
                <ResumeHeaderList type='link' items={[profile.github, profile.blog]} />
            </div>
            <ul className='flex flex-wrap gap-x-3 gap-y-0.5 text-sm font-medium'>
                {profile.introduce.map((line) => (
                    <li className='w-full1' key={line[lang]}>
                        • {line[lang]}
                    </li>
                ))}
            </ul>
        </div>
    )
}
