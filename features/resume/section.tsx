import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import type { WebResumeCompany } from '@entities/web-resume/web-resume.type'
import { SectionBadges } from '@features/common/section-badge'
import type { SupportedLanguage } from '@shared/constants/seo'

type ResumeSectionProps = { company: WebResumeCompany; lang: SupportedLanguage }

export const ResumeSection: FC<ResumeSectionProps> = ({ company, lang }) => {
    return (
        <div className='p-1.5'>
            <div className='flex justify-between items-center'>
                <h3 className='text-md font-bold'>{company.name[lang]}</h3>
                <p className='text-sm'>{company.location[lang]}</p>
            </div>
            <div className='flex justify-between items-center'>
                <h4 className='text-sm font-medium text-foreground/75'>{company.role[lang]}</h4>
                <p className='text-xs'>{company.period[lang]}</p>
            </div>
            {company.projects.map((project) => (
                <ul key={project.title[lang]} className='text-sm py-2'>
                    <li className='list-disc ml-5 font-medium'>
                        {project.site ? (
                            <div className='inline-flex items-center gap-0.5 w-full justify-between'>
                                <Link target='_blank' href={project.site} className='text-blue-950 hover:underline inline-flex items-center'>
                                    {project.title[lang]}
                                    <ExternalLink className='inline-block size-3' />
                                </Link>
                                <SectionBadges items={project.skills} />
                            </div>
                        ) : (
                            <div className='inline-flex justify-between items-center w-full'>
                                <span>{project.title[lang]}</span>
                                <SectionBadges items={project.skills} />
                            </div>
                        )}

                        <ul className='mt-1 font-normal'>
                            {project.description.map((line) => (
                                <li className='list-[circle] ml-5' key={line[lang]}>
                                    {line[lang]}
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            ))}
        </div>
    )
}
