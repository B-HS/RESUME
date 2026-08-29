import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import type { WebResumeCompany } from '@entities/web-resume/web-resume.type'
import { EditableText } from '@features/edit/editable-text'
import { EditIconButton } from '@features/edit/edit-icon-button'
import { SectionBadges } from '@features/common/section-badge'
import type { SupportedLanguage } from '@shared/constants/seo'
import { localizedFrom, withLangValue } from '@shared/lib/localized'

type ResumeSectionProps = {
    company: WebResumeCompany
    lang: SupportedLanguage
    edit?: { onCompanyChange: (company: WebResumeCompany) => void; onRemove?: () => void }
}

export const ResumeSection: FC<ResumeSectionProps> = ({ company, lang, edit }) => {
    const changeCompany = (partial: Partial<WebResumeCompany>) => edit?.onCompanyChange({ ...company, ...partial })

    const changeCompanyText = (field: 'name' | 'period' | 'location' | 'role') => (value: string) => {
        changeCompany({ [field]: withLangValue(company[field], lang, value) })
    }

    const changeProject = (index: number, next: WebResumeCompany['projects'][number]) => {
        changeCompany({ projects: company.projects.map((project, i) => (i === index ? next : project)) })
    }

    const handleAddProject = () => {
        changeCompany({ projects: [...company.projects, { title: localizedFrom(''), description: [localizedFrom('')], skills: [] }] })
    }

    return (
        <div className='p-1.5'>
            <div className='flex justify-between items-center'>
                <h3 className='text-md font-bold inline-flex items-center gap-1.5'>
                    {edit ? <EditableText value={company.name[lang]} onCommit={changeCompanyText('name')} /> : company.name[lang]}
                    {edit?.onRemove && <EditIconButton action='remove' label='회사 삭제' onClick={edit.onRemove} />}
                </h3>
                <p className='text-sm'>
                    {edit ? <EditableText value={company.location[lang]} onCommit={changeCompanyText('location')} /> : company.location[lang]}
                </p>
            </div>
            <div className='flex justify-between items-center'>
                <h4 className='text-sm font-medium text-foreground/75'>
                    {edit ? <EditableText value={company.role[lang]} onCommit={changeCompanyText('role')} /> : company.role[lang]}
                </h4>
                <p className='text-xs'>
                    {edit ? <EditableText value={company.period[lang]} onCommit={changeCompanyText('period')} /> : company.period[lang]}
                </p>
            </div>
            {company.projects.map((project, projectIndex) => (
                <ul key={`${projectIndex}-${project.title[lang]}`} className='text-sm py-2'>
                    <li className='list-disc ml-5 font-medium'>
                        {edit ? (
                            <div className='inline-flex items-center gap-0.5 w-full justify-between'>
                                <span className='inline-flex items-center gap-1.5'>
                                    <EditableText
                                        value={project.title[lang]}
                                        onCommit={(value) =>
                                            changeProject(projectIndex, { ...project, title: withLangValue(project.title, lang, value) })
                                        }
                                    />
                                    <span className='text-xs font-normal text-muted-foreground inline-flex items-center gap-0.5'>
                                        <ExternalLink className='inline-block size-3' />
                                        <EditableText
                                            value={project.site ?? ''}
                                            onCommit={(value) => changeProject(projectIndex, { ...project, site: value || undefined })}
                                        />
                                    </span>
                                </span>
                                <span className='inline-flex items-center gap-1'>
                                    <SectionBadges
                                        items={project.skills}
                                        edit={{ onItemsChange: (skills) => changeProject(projectIndex, { ...project, skills }) }}
                                    />
                                    <EditIconButton
                                        action='remove'
                                        label='프로젝트 삭제'
                                        onClick={() => changeCompany({ projects: company.projects.filter((_, i) => i !== projectIndex) })}
                                    />
                                </span>
                            </div>
                        ) : project.site ? (
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
                            {project.description.map((line, lineIndex) => (
                                <li className='list-[circle] ml-5' key={`${lineIndex}-${line[lang]}`}>
                                    {edit ? (
                                        <span className='inline-flex items-center gap-1'>
                                            <EditableText
                                                value={line[lang]}
                                                onCommit={(value) =>
                                                    changeProject(projectIndex, {
                                                        ...project,
                                                        description: project.description.map((l, i) =>
                                                            i === lineIndex ? withLangValue(l, lang, value) : l,
                                                        ),
                                                    })
                                                }
                                            />
                                            <EditIconButton
                                                action='remove'
                                                label='설명 줄 삭제'
                                                onClick={() =>
                                                    changeProject(projectIndex, {
                                                        ...project,
                                                        description: project.description.filter((_, i) => i !== lineIndex),
                                                    })
                                                }
                                            />
                                        </span>
                                    ) : (
                                        line[lang]
                                    )}
                                </li>
                            ))}
                            {edit && (
                                <li className='list-none ml-5 mt-0.5'>
                                    <EditIconButton
                                        action='add'
                                        label='설명 줄 추가'
                                        onClick={() =>
                                            changeProject(projectIndex, { ...project, description: [...project.description, localizedFrom('')] })
                                        }
                                    />
                                </li>
                            )}
                        </ul>
                    </li>
                </ul>
            ))}
            {edit && <EditIconButton action='add' label='프로젝트 추가' onClick={handleAddProject} className='mt-1' />}
        </div>
    )
}
