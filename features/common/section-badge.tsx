export const SectionBadges = ({ items }: { items: string[] }) => (
    <section className='flex items-center gap-1 text-xs text-primary/50'>
        {items.map((item, idx) => (
            <span key={idx} className='border p-0.5 px-0.75 rounded-xs border-secondary hover:bg-accent text-nowrap'>
                {item}
            </span>
        ))}
    </section>
)
