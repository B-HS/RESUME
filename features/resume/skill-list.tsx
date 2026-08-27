import { FC } from 'react'

type SkillListProps = { items: string[] }

export const SkillList: FC<SkillListProps> = ({ items }) => {
    return (
        <ul className='flex flex-wrap items-center gap-x-3 gap-y-0.5 text-sm leading-6 text-foreground/75'>
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    )
}
