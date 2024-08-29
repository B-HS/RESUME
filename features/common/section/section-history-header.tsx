export const SectionHistoryHeader = ({ title, subtitle, job, working }: { title: string; working: string; job: string; subtitle?: string }) => {
    return (
        <section className='flex flex-col w-full border-b py-2'>
            <span className='text-xs'>{subtitle}</span>
            <section className='flex gap-2 flex-wrap items-baseline'>
                <span className='text-2xl text-nowrap font-bold'>{title}</span>
                <section className='space-x-2 whitespace-nowrap'>
                    <span className='font-semibold'>{job}</span>
                    <span>{working}</span>
                </section>
            </section>
        </section>
    )
}
