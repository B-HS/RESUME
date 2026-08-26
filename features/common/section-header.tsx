import { Separator } from '@shared/ui/separator'

export const SectionHeader = ({ title }: { title: string }) => {
    return (
        <>
            <h2 className='text-lg font-extrabold px-1.5 pt-1.75'>{title}</h2>
            <Separator />
        </>
    )
}
