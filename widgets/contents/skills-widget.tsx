import { SectionHeader } from '@features/common/section'
import { Badge } from '@shared/ui/badge'
import { cn } from '@shared/utils'
import { Fragment } from 'react'

type Skills = {
    [category: string]: {
        [title: string]: string[]
    }
}

const calculatePercentage = (idx: number, totalItems: number): number => {
    const minValue = 10
    const maxValue = 90
    const stepValue = 5
    const range = maxValue - minValue
    return Math.ceil((idx / totalItems) * (range / stepValue)) * stepValue + minValue
}

const Badges = ({ items }: { items: string[] }) => {
    return (
        <Fragment>
            {items.map((item, idx) => (
                <Badge
                    variant='default'
                    className={cn('rounded-sm !font-bold px-1.5 text-white')}
                    key={item}
                    style={{
                        backgroundColor: `hsl(0, 0%, ${calculatePercentage(idx, items.length)}%)`,
                    }}>
                    {item}
                </Badge>
            ))}
        </Fragment>
    )
}

const Category = ({ category, items }: { category: string; items: { [title: string]: string[] } }) => {
    return (
        <section className='flex flex-col gap-1 max-w-md' key={category}>
            <h3 className='text-xl font-bold'>{category}</h3>
            <section className='flex flex-wrap justify-between'>
                {Object.entries(items).map(([title, items]) => (
                    <section className='flex px-2.5 py-1' key={title}>
                        <section className='min-w-32 font-semibold'>{title}</section>
                        <section className='flex flex-wrap gap-2'>
                            <Badges items={items} />
                        </section>
                    </section>
                ))}
            </section>
        </section>
    )
}

export const SkillsWidget = ({ skills, subtitle = '- 거쳐온 기술들 및 숙련도 순으로 나열됩니다' }: { skills: Skills; subtitle?: string }) => {
    return (
        <SectionHeader title='Skills' subtitle={subtitle}>
            {Object.entries(skills as Skills).map(([category, items]) => (
                <Category key={category} category={category} items={items} />
            ))}
        </SectionHeader>
    )
}
