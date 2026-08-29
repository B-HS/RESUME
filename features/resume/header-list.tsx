import { ExternalLinkIcon, MailIcon } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import { EditableText } from '@features/edit/editable-text'
import { cn } from '@shared/lib/utils'

type ResumeHeaderListProps = {
    type: 'text' | 'link' | 'mail'
    items: string[]
    isFullWidth?: boolean
    edit?: { onItemCommit: (index: number, value: string) => void }
}

export const ResumeHeaderList: FC<ResumeHeaderListProps> = ({ type, items, isFullWidth, edit }) => {
    const LinkIcon = type === 'mail' ? MailIcon : ExternalLinkIcon
    return (
        <ul className={cn('font-medium text-sm flex items-center', isFullWidth && 'w-full')}>
            {items.map((item, idx) => (
                <li key={`${idx}-${item}`} className='inline-flex items-center'>
                    {edit ? (
                        <span className={cn('inline-flex items-center gap-0.75', ['link', 'mail'].includes(type) && 'text-blue-950')}>
                            {['link', 'mail'].includes(type) && <LinkIcon className='size-3.75' strokeWidth={1.25} />}
                            <EditableText value={item} onCommit={(value) => edit.onItemCommit(idx, value)} />
                        </span>
                    ) : ['link', 'mail'].includes(type) ? (
                        <Link
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-blue-950 inline-flex items-center gap-0.75'
                            href={type === 'mail' ? `mailto:${item}` : item}>
                            <LinkIcon className='size-3.75' strokeWidth={1.25} />
                            {item}
                        </Link>
                    ) : (
                        item
                    )}
                    {idx < items.length - 1 && <span className='text-muted-foreground px-1'>•</span>}
                </li>
            ))}
        </ul>
    )
}
