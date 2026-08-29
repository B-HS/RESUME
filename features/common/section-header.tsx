import { EditableText } from '@features/edit/editable-text'
import { EditIconButton } from '@features/edit/edit-icon-button'
import { Separator } from '@shared/ui/separator'

type SectionHeaderProps = {
    title: string
    edit?: { onTitleChange: (value: string) => void; onRemove?: () => void }
}

export const SectionHeader = ({ title, edit }: SectionHeaderProps) => {
    return (
        <>
            <h2 className='text-lg font-extrabold px-1.5 pt-1.75'>
                {edit ? <EditableText value={title} onCommit={edit.onTitleChange} /> : title}
                {edit?.onRemove && <EditIconButton action='remove' label='섹션 삭제' onClick={edit.onRemove} className='ml-2' />}
            </h2>
            <Separator />
        </>
    )
}
