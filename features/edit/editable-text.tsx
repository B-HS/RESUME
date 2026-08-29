import { FC, KeyboardEvent } from 'react'
import { cn } from '@shared/lib/utils'

type EditableTextProps = {
    value: string
    onCommit: (value: string) => void
    className?: string
    allowNewline?: boolean
}

export const EditableText: FC<EditableTextProps> = ({ value, onCommit, className, allowNewline }) => {
    const handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
        if (allowNewline || event.key !== 'Enter') return
        event.preventDefault()
        event.currentTarget.blur()
    }

    return (
        <span
            contentEditable
            suppressContentEditableWarning
            spellCheck={false}
            className={cn(
                'inline-block min-w-6 rounded-xs px-0.5 -mx-0.5 outline-1 outline-dashed outline-primary/25 focus:outline-solid focus:outline-primary/60 focus:bg-accent/40',
                className,
            )}
            onKeyDown={handleKeyDown}
            onBlur={(event) => onCommit((event.currentTarget.textContent ?? '').trim())}>
            {value}
        </span>
    )
}
