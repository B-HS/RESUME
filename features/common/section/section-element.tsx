import { ReactNode } from 'react'

export const SectionElement = ({ title, children }: { title?: string; children?: ReactNode }) => {
    return (
        <section className='flex items-center flex-wrap gap-3'>
            <section className='flex items-start gap-1 min-w-20 justify-start text-xl'>
                <span className='font-semibold'>{title}</span>
            </section>
            <div className='[&_*]:transition-all min-w-64'>{children}</div>
        </section>
    )
}
