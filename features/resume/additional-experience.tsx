import { FC } from 'react'
import type { WebResumeAdditionalExperience } from '@entities/web-resume/web-resume.type'
import { EditableText } from '@features/edit/editable-text'
import { EditIconButton } from '@features/edit/edit-icon-button'
import { SectionHeader } from '@features/common/section-header'
import type { SupportedLanguage } from '@shared/constants/seo'
import { localizedFrom, withLangValue } from '@shared/lib/localized'

type AdditionalExperienceProps = {
    label: string
    items: WebResumeAdditionalExperience[]
    lang: SupportedLanguage
    edit?: {
        onLabelChange: (value: string) => void
        onItemsChange: (items: WebResumeAdditionalExperience[]) => void
        onRemoveSection?: () => void
    }
}

export const AdditionalExperience: FC<AdditionalExperienceProps> = ({ label, items, lang, edit }) => {
    const changeItem = (index: number, next: WebResumeAdditionalExperience) => {
        edit?.onItemsChange(items.map((item, i) => (i === index ? next : item)))
    }

    return (
        <>
            <SectionHeader title={label} edit={edit ? { onTitleChange: edit.onLabelChange, onRemove: edit.onRemoveSection } : undefined} />
            <ul className='p-1.5 text-sm'>
                {items.map((experience, index) => (
                    <li key={`${index}-${experience.period[lang]}`} className='flex gap-3 py-1'>
                        <span className='w-30 shrink-0 text-xs text-foreground/75'>
                            {edit ? (
                                <EditableText
                                    value={experience.period[lang]}
                                    onCommit={(value) => changeItem(index, { ...experience, period: withLangValue(experience.period, lang, value) })}
                                />
                            ) : (
                                experience.period[lang]
                            )}
                        </span>
                        <span className='inline-flex items-center gap-1'>
                            {edit ? (
                                <EditableText
                                    value={experience.description[lang]}
                                    onCommit={(value) =>
                                        changeItem(index, { ...experience, description: withLangValue(experience.description, lang, value) })
                                    }
                                />
                            ) : (
                                experience.description[lang]
                            )}
                            {edit && (
                                <EditIconButton
                                    action='remove'
                                    label='항목 삭제'
                                    onClick={() => edit.onItemsChange(items.filter((_, i) => i !== index))}
                                />
                            )}
                        </span>
                    </li>
                ))}
                {edit && (
                    <li className='py-1'>
                        <EditIconButton
                            action='add'
                            label='항목 추가'
                            onClick={() => edit.onItemsChange([...items, { period: localizedFrom(''), description: localizedFrom('') }])}
                        />
                    </li>
                )}
            </ul>
        </>
    )
}
