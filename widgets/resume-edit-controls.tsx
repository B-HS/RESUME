'use client'

import { Check, Pencil, X } from 'lucide-react'
import { FC } from 'react'
import { Button } from '@shared/ui/button'

type ResumeEditControlsProps = {
    isEditing: boolean
    isSaving: boolean
    onStart: () => void
    onSave: () => void
    onCancel: () => void
}

export const ResumeEditControls: FC<ResumeEditControlsProps> = ({ isEditing, isSaving, onStart, onSave, onCancel }) => {
    return (
        <div className='fixed bottom-9 left-9 z-50 flex flex-col gap-1.5'>
            {isEditing ? (
                <>
                    <Button
                        variant='secondary'
                        size='icon'
                        aria-label='저장'
                        disabled={isSaving}
                        className='size-9 border border-primary/10'
                        onClick={onSave}>
                        <Check />
                    </Button>
                    <Button
                        variant='secondary'
                        size='icon'
                        aria-label='편집 취소'
                        disabled={isSaving}
                        className='size-9 border border-primary/10'
                        onClick={onCancel}>
                        <X />
                    </Button>
                </>
            ) : (
                <Button variant='secondary' size='icon' aria-label='이력서 편집' className='size-9 border border-primary/10' onClick={onStart}>
                    <Pencil />
                </Button>
            )}
        </div>
    )
}
