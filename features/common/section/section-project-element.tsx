import { projects } from '@shared/constant'
import { cn } from '@shared/utils'
import { FC } from 'react'

const ProjectDescription: FC<{ descriptions: string[]; which: '배경' | '개선' | '결과' }> = ({ descriptions, which }) => {
    const labelColor =
        which === '배경'
            ? 'text-neutral-600 border-neutral-500'
            : which === '개선'
              ? 'text-blue-600 border-blue-500'
              : 'text-green-600 border-green-500'

    return (
        <div className='flex mb-2'>
            <div className={cn('shrink-0 font-semibold text-neutral-700 border-neutral-300 border-r-3 pr-3.5', labelColor)}>{which}</div>
            <div className='flex-1 pl-3.5'>
                {descriptions.map((text, index) => (
                    <p key={index} className='text-neutral-950 mb-1.5'>
                        {text}
                    </p>
                ))}
            </div>
        </div>
    )
}

const SideProjectItem: FC<(typeof projects)[0]> = ({ name, url, description }) => {
    return (
        <div className='border-neutral-200 py-5 w-[450px]'>
            <h3 className='font-bold mb-3.5 text-neutral-800'>
                <a href={url[0]} target='_blank' rel='noreferrer' className='hover:underline underline-offset-2 text-blue-700'>
                    {name}
                </a>
            </h3>
            <ProjectDescription descriptions={description.background} which='배경' />
            <ProjectDescription descriptions={description.implementation} which='개선' />
            <ProjectDescription descriptions={description.results} which='결과' />
        </div>
    )
}

export const SectionProjectElement = ({ projectList }: { projectList: typeof projects }) => {
    return (
        <div className='flex flex-wrap justify-between'>
            {projectList.map((project) => (
                <SideProjectItem key={project.name} {...project} />
            ))}
        </div>
    )
}
