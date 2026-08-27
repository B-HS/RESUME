import { LangType, translator } from '@entities/translations'
import { SectionHeader } from '@features/common/section-header'
import { SkillList } from '@features/resume/skill-list'
import { FC, Fragment } from 'react'

type SkillsProps = { lang: LangType }

export const Skills: FC<SkillsProps> = ({ lang }) => {
    const t = translator({ lang })
    const skillGroups = [
        { name: t('SKILLS_FRONTEND'), items: ['Next.js', 'React', 'Vue', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Storybook', 'Electron'] },
        { name: t('SKILLS_BACKEND'), items: ['Hono', 'Spring Boot', 'Drizzle ORM', 'JPA', 'MyBatis', 'MySQL', 'MariaDB', 'SQLite'] },
        {
            name: t('SKILLS_CLOUD'),
            items: ['AWS ECS', 'AWS Lightsail', 'Vercel', 'Cloudflare R2'],
        },
        { name: t('SKILLS_INFRASTRUCTURE'), items: ['Docker', 'Debian/RHEL Linux', 'Nginx'] },
    ]

    return (
        <>
            <SectionHeader title={t('SKILLS')} />
            <div className='grid gap-x-3 gap-y-1 p-1.5 sm:grid-cols-[7.5rem_minmax(0,1fr)]'>
                {skillGroups.map((skillGroup) => (
                    <Fragment key={skillGroup.name}>
                        <h3 className='text-sm font-medium'>{skillGroup.name}</h3>
                        <SkillList items={skillGroup.items} />
                    </Fragment>
                ))}
            </div>
        </>
    )
}
