import { EditableText } from '@features/edit/editable-text'
import { EditIconButton } from '@features/edit/edit-icon-button'

type SectionBadgesProps = {
    items: string[]
    edit?: { onItemsChange: (items: string[]) => void }
}

export const SectionBadges = ({ items, edit }: SectionBadgesProps) => (
    <section className='flex items-center gap-1 text-xs text-primary/50'>
        {items.map((item, idx) => (
            <span
                key={`${idx}-${item}`}
                className='border p-0.5 px-0.75 rounded-xs border-secondary hover:bg-accent text-nowrap inline-flex items-center gap-0.5'>
                {edit ? (
                    <EditableText value={item} onCommit={(value) => edit.onItemsChange(items.map((skill, i) => (i === idx ? value : skill)))} />
                ) : (
                    item
                )}
                {edit && <EditIconButton action='remove' label='스킬 삭제' onClick={() => edit.onItemsChange(items.filter((_, i) => i !== idx))} />}
            </span>
        ))}
        {edit && <EditIconButton action='add' label='스킬 추가' onClick={() => edit.onItemsChange([...items, ''])} />}
    </section>
)
