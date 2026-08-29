import { FC } from 'react'
import type { WebResumeProfile } from '@entities/web-resume/web-resume.type'
import { EditableText } from '@features/edit/editable-text'
import { EditIconButton } from '@features/edit/edit-icon-button'
import { ResumeHeaderList } from '@features/resume/header-list'
import type { SupportedLanguage } from '@shared/constants/seo'
import { localizedFrom, withLangValue } from '@shared/lib/localized'

const TEXT_ITEM_FIELDS = ['jobTitle', 'location', 'birthday'] as const
const LINK_ITEM_FIELDS = ['github', 'blog'] as const

type IntroduceProps = {
    profile: WebResumeProfile
    lang: SupportedLanguage
    edit?: { onProfileChange: (profile: WebResumeProfile) => void }
}

export const Introduce: FC<IntroduceProps> = ({ profile, lang, edit }) => {
    const changeProfile = (partial: Partial<WebResumeProfile>) => edit?.onProfileChange({ ...profile, ...partial })

    const handleTextItemCommit = (index: number, value: string) => {
        const field = TEXT_ITEM_FIELDS[index]
        if (field) changeProfile({ [field]: withLangValue(profile[field], lang, value) })
    }

    const handleLinkItemCommit = (index: number, value: string) => {
        const field = LINK_ITEM_FIELDS[index]
        if (field) changeProfile({ [field]: value })
    }

    const handleIntroduceLineCommit = (index: number, value: string) => {
        changeProfile({ introduce: profile.introduce.map((line, i) => (i === index ? withLangValue(line, lang, value) : line)) })
    }

    return (
        <div className='flex flex-col pt-3 p-1.5 gap-1.5'>
            <div className='leading-tight flex flex-wrap items-baseline gap-1.25'>
                <div className='flex items-baseline gap-1.25'>
                    <h1 className='text-xl font-extrabold'>
                        <ruby>
                            {edit ? (
                                <EditableText value={profile.lastName} onCommit={(value) => changeProfile({ lastName: value })} />
                            ) : (
                                profile.lastName
                            )}
                            <rt className='font-medium text-muted-foreground'>
                                {edit ? (
                                    <EditableText
                                        value={profile.lastNameReading[lang]}
                                        onCommit={(value) => changeProfile({ lastNameReading: withLangValue(profile.lastNameReading, lang, value) })}
                                    />
                                ) : (
                                    profile.lastNameReading[lang]
                                )}
                            </rt>
                        </ruby>
                        &nbsp;
                        <ruby>
                            {edit ? (
                                <EditableText value={profile.firstName} onCommit={(value) => changeProfile({ firstName: value })} />
                            ) : (
                                profile.firstName
                            )}
                            <rt className='font-medium text-muted-foreground'>
                                {edit ? (
                                    <EditableText
                                        value={profile.firstNameReading[lang]}
                                        onCommit={(value) =>
                                            changeProfile({ firstNameReading: withLangValue(profile.firstNameReading, lang, value) })
                                        }
                                    />
                                ) : (
                                    profile.firstNameReading[lang]
                                )}
                            </rt>
                        </ruby>
                    </h1>
                </div>
                <ResumeHeaderList
                    type='text'
                    items={[profile.jobTitle[lang], profile.location[lang], profile.birthday[lang]]}
                    edit={edit ? { onItemCommit: handleTextItemCommit } : undefined}
                />
            </div>
            <div className='flex flex-wrap gap-1.25 items-center py-px'>
                <ResumeHeaderList
                    type='mail'
                    items={[profile.email]}
                    isFullWidth
                    edit={edit ? { onItemCommit: (_, value) => changeProfile({ email: value }) } : undefined}
                />
                <ResumeHeaderList
                    type='link'
                    items={[profile.github, profile.blog]}
                    edit={edit ? { onItemCommit: handleLinkItemCommit } : undefined}
                />
            </div>
            <ul className='flex flex-wrap gap-x-3 gap-y-0.5 text-sm font-medium'>
                {profile.introduce.map((line, idx) => (
                    <li className='w-full1 inline-flex items-center gap-1' key={`${idx}-${line[lang]}`}>
                        • {edit ? <EditableText value={line[lang]} onCommit={(value) => handleIntroduceLineCommit(idx, value)} /> : line[lang]}
                        {edit && (
                            <EditIconButton
                                action='remove'
                                label='소개 줄 삭제'
                                onClick={() => changeProfile({ introduce: profile.introduce.filter((_, i) => i !== idx) })}
                            />
                        )}
                    </li>
                ))}
                {edit && (
                    <li>
                        <EditIconButton
                            action='add'
                            label='소개 줄 추가'
                            onClick={() => changeProfile({ introduce: [...profile.introduce, localizedFrom('')] })}
                        />
                    </li>
                )}
            </ul>
        </div>
    )
}
