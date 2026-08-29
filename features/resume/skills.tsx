import { FC, Fragment } from 'react'
import type { WebResumeSkillGroup } from '@entities/web-resume/web-resume.type'
import { SectionHeader } from '@features/common/section-header'
import { SkillList } from '@features/resume/skill-list'
import type { SupportedLanguage } from '@shared/constants/seo'

type SkillsProps = { label: string; groups: WebResumeSkillGroup[]; lang: SupportedLanguage }

export const Skills: FC<SkillsProps> = ({ label, groups, lang }) => {
    return (
        <>
            <SectionHeader title={label} />
            <div className='grid gap-x-3 gap-y-1 p-1.5 sm:grid-cols-[7.5rem_minmax(0,1fr)]'>
                {groups.map((group) => (
                    <Fragment key={group.name[lang]}>
                        <h3 className='text-sm font-medium'>{group.name[lang]}</h3>
                        <SkillList items={group.items} />
                    </Fragment>
                ))}
            </div>
        </>
    )
}
