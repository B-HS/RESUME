import { FC } from 'react'
import { EditableText } from '@features/edit/editable-text'
import { EditIconButton } from '@features/edit/edit-icon-button'

type SkillListProps = {
    items: string[]
    edit?: { onItemsChange: (items: string[]) => void }
}

export const SkillList: FC<SkillListProps> = ({ items, edit }) => {
    return (
        <ul className='flex flex-wrap items-center gap-x-3 gap-y-0.5 text-sm leading-6 text-foreground/75'>
            {items.map((item, idx) => (
                <li key={`${idx}-${item}`} className='inline-flex items-center gap-1'>
                    {edit ? (
                        <EditableText value={item} onCommit={(value) => edit.onItemsChange(items.map((skill, i) => (i === idx ? value : skill)))} />
                    ) : (
                        item
                    )}
                    {edit && (
                        <EditIconButton action='remove' label='스킬 삭제' onClick={() => edit.onItemsChange(items.filter((_, i) => i !== idx))} />
                    )}
                </li>
            ))}
            {edit && (
                <li>
                    <EditIconButton action='add' label='스킬 추가' onClick={() => edit.onItemsChange([...items, ''])} />
                </li>
            )}
        </ul>
    )
}
