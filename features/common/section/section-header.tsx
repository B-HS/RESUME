import { ReactNode } from 'react'

export const SectionHeader = ({ title, subtitle, children }: { title: string; subtitle?: string; children?: ReactNode }) => {
    return (
        <section className='flex flex-col gap-2 py-5 px-2'>
            <section className='flex gap-2 items-center'>
                <h2 className='text-3xl font-bold'>{title}</h2>
                {subtitle && <span className='text-primary/70'>{subtitle}</span>}
            </section>
            <section className='flex flex-wrap gap-5 justify-between px-3'>{children}</section>
        </section>
    )
}
