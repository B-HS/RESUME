'use client'

import { FC, useState } from 'react'
import { useGetSession } from '@entities/session/session.query'
import { useGetWebResume, useUpdateWebResume } from '@entities/web-resume/web-resume.query'
import { AdditionalExperience } from '@features/resume/additional-experience'
import { Introduce } from '@features/resume/introduce'
import { PersonalProjects } from '@features/resume/personal-projects'
import { Skills } from '@features/resume/skills'
import { WorkExperience } from '@features/resume/work-experience'
import { EditIconButton } from '@features/edit/edit-icon-button'
import type { WebResumeData } from '@entities/web-resume/web-resume.type'
import type { SupportedLanguage } from '@shared/constants/seo'
import { localizedFrom, withLangValue } from '@shared/lib/localized'
import { ResumeEditControls } from '@widgets/resume-edit-controls'

type ResumeProps = { lang: SupportedLanguage }

export const Resume: FC<ResumeProps> = ({ lang }) => {
    const [draft, setDraft] = useState<WebResumeData | null>(null)

    const { data } = useGetWebResume()
    const { data: session } = useGetSession()
    const updateWebResumeMutation = useUpdateWebResume()

    const isAdmin = session?.user.role === 'admin'
    const isEditing = draft !== null
    const webResume = draft ?? data.webResume

    const patchDraft = (partial: Partial<WebResumeData>) => setDraft((prev) => (prev ? { ...prev, ...partial } : prev))

    const changeLabel = (key: keyof WebResumeData['labels']) => (value: string) => {
        setDraft((prev) => (prev ? { ...prev, labels: { ...prev.labels, [key]: withLangValue(prev.labels[key], lang, value) } } : prev))
    }

    const changeCustomSection = (index: number, next: WebResumeData['customSections'][number]) => {
        setDraft((prev) => (prev ? { ...prev, customSections: prev.customSections.map((section, i) => (i === index ? next : section)) } : prev))
    }

    const handleSave = () => {
        if (!draft) return
        updateWebResumeMutation.mutate(draft, { onSuccess: () => setDraft(null) })
    }

    return (
        <div className='flex flex-col pb-20'>
            <Introduce
                profile={webResume.profile}
                lang={lang}
                edit={isEditing ? { onProfileChange: (profile) => patchDraft({ profile }) } : undefined}
            />
            <WorkExperience
                label={webResume.labels.workExperience[lang]}
                companies={webResume.workExperiences}
                lang={lang}
                edit={
                    isEditing
                        ? { onLabelChange: changeLabel('workExperience'), onCompaniesChange: (workExperiences) => patchDraft({ workExperiences }) }
                        : undefined
                }
            />
            <PersonalProjects
                label={webResume.labels.projects[lang]}
                block={webResume.personalProjects}
                lang={lang}
                edit={
                    isEditing
                        ? { onLabelChange: changeLabel('projects'), onBlockChange: (personalProjects) => patchDraft({ personalProjects }) }
                        : undefined
                }
            />
            <Skills
                label={webResume.labels.skills[lang]}
                groups={webResume.skillGroups}
                lang={lang}
                edit={isEditing ? { onLabelChange: changeLabel('skills'), onGroupsChange: (skillGroups) => patchDraft({ skillGroups }) } : undefined}
            />
            <AdditionalExperience
                label={webResume.labels.etc[lang]}
                items={webResume.additionalExperiences}
                lang={lang}
                edit={
                    isEditing
                        ? { onLabelChange: changeLabel('etc'), onItemsChange: (additionalExperiences) => patchDraft({ additionalExperiences }) }
                        : undefined
                }
            />
            {webResume.customSections.map((section, index) => (
                <AdditionalExperience
                    key={`${index}-${section.label[lang]}`}
                    label={section.label[lang]}
                    items={section.items}
                    lang={lang}
                    edit={
                        isEditing
                            ? {
                                  onLabelChange: (value) =>
                                      changeCustomSection(index, { ...section, label: withLangValue(section.label, lang, value) }),
                                  onItemsChange: (items) => changeCustomSection(index, { ...section, items }),
                                  onRemoveSection: () =>
                                      setDraft((prev) =>
                                          prev ? { ...prev, customSections: prev.customSections.filter((_, i) => i !== index) } : prev,
                                      ),
                              }
                            : undefined
                    }
                />
            ))}
            {isEditing && (
                <div className='px-1.5 pt-3'>
                    <EditIconButton
                        action='add'
                        label='섹션 추가'
                        onClick={() => patchDraft({ customSections: [...webResume.customSections, { label: localizedFrom(''), items: [] }] })}
                    />
                </div>
            )}
            {isAdmin && (
                <ResumeEditControls
                    isEditing={isEditing}
                    isSaving={updateWebResumeMutation.isPending}
                    onStart={() => setDraft(structuredClone(data.webResume))}
                    onSave={handleSave}
                    onCancel={() => setDraft(null)}
                />
            )}
        </div>
    )
}
