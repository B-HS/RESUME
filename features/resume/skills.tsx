import { FC, Fragment } from 'react'
import type { WebResumeSkillGroup } from '@entities/web-resume/web-resume.type'
import { EditableText } from '@features/edit/editable-text'
import { EditIconButton } from '@features/edit/edit-icon-button'
import { SectionHeader } from '@features/common/section-header'
import { SkillList } from '@features/resume/skill-list'
import type { SupportedLanguage } from '@shared/constants/seo'
import { localizedFrom, withLangValue } from '@shared/lib/localized'

type SkillsProps = {
    label: string
    groups: WebResumeSkillGroup[]
    lang: SupportedLanguage
    edit?: { onLabelChange: (value: string) => void; onGroupsChange: (groups: WebResumeSkillGroup[]) => void }
}

export const Skills: FC<SkillsProps> = ({ label, groups, lang, edit }) => {
    const changeGroup = (index: number, next: WebResumeSkillGroup) => {
        edit?.onGroupsChange(groups.map((group, i) => (i === index ? next : group)))
    }

    return (
        <>
            <SectionHeader title={label} edit={edit ? { onTitleChange: edit.onLabelChange } : undefined} />
            <div className='grid gap-x-3 gap-y-1 p-1.5 sm:grid-cols-[7.5rem_minmax(0,1fr)]'>
                {groups.map((group, index) => (
                    <Fragment key={`${index}-${group.name[lang]}`}>
                        <h3 className='text-sm font-medium inline-flex items-center gap-1'>
                            {edit ? (
                                <EditableText
                                    value={group.name[lang]}
                                    onCommit={(value) => changeGroup(index, { ...group, name: withLangValue(group.name, lang, value) })}
                                />
                            ) : (
                                group.name[lang]
                            )}
                            {edit && (
                                <EditIconButton
                                    action='remove'
                                    label='스킬 그룹 삭제'
                                    onClick={() => edit.onGroupsChange(groups.filter((_, i) => i !== index))}
                                />
                            )}
                        </h3>
                        <SkillList
                            items={group.items}
                            edit={edit ? { onItemsChange: (items) => changeGroup(index, { ...group, items }) } : undefined}
                        />
                    </Fragment>
                ))}
                {edit && (
                    <div>
                        <EditIconButton
                            action='add'
                            label='스킬 그룹 추가'
                            onClick={() => edit.onGroupsChange([...groups, { name: localizedFrom(''), items: [] }])}
                        />
                    </div>
                )}
            </div>
        </>
    )
}
