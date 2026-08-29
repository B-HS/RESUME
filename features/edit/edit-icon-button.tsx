import { Plus, Trash2 } from 'lucide-react'
import { FC } from 'react'
import { cn } from '@shared/lib/utils'

type EditIconButtonProps = {
    action: 'add' | 'remove'
    label: string
    onClick: () => void
    className?: string
}

export const EditIconButton: FC<EditIconButtonProps> = ({ action, label, onClick, className }) => {
    const Icon = action === 'add' ? Plus : Trash2
    return (
        <button
            type='button'
            aria-label={label}
            title={label}
            onClick={onClick}
            className={cn(
                'inline-flex items-center justify-center size-5 rounded-xs border border-dashed align-middle',
                action === 'add'
                    ? 'border-primary/30 text-primary/60 hover:bg-accent'
                    : 'border-destructive/30 text-destructive/60 hover:bg-destructive/10',
                className,
            )}>
            <Icon className='size-3' />
        </button>
    )
}
