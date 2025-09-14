import { projects } from '@shared/constant'
import { cn } from '@shared/utils'
import { ExternalLink } from 'lucide-react'
import { FC } from 'react'

const ProjectDescription: FC<{ descriptions: string[]; which: '배경' | '구현' | '결과' }> = ({ descriptions, which }) => {
    const labelColor =
        which === '배경'
            ? 'text-primary/90 border-primary/70'
            : which === '구현'
              ? 'text-blue-600 border-blue-500'
              : 'text-green-600 border-green-500'

    return (
        <div className='flex mb-2'>
            <div className={cn('shrink-0 font-semibold text-primary/70 border-border border-r-3 pr-3.5', labelColor)}>{which}</div>
            <div className='flex-1 pl-3.5'>
                {descriptions.map((text, index) => (
                    <p key={index} className='text-primary mb-1.5'>
                        {text}
                    </p>
                ))}
            </div>
        </div>
    )
}

const SideProjectItem: FC<(typeof projects)[0]> = ({ name, url, description }) => {
    return (
        <div className='border-border py-5 w-[450px]'>
            <h3 className='font-bold mb-3.5 text-primary/80'>
                <a
                    href={url[0]}
                    target='_blank'
                    rel='noreferrer'
                    className='text-primary text-2xl inline-flex items-center gap-2 border-b-2 pb-0.5 hover:border-primary border-transparent transition-all'>
                    {name} <ExternalLink size={16} />
                </a>
            </h3>
            <ProjectDescription descriptions={description.background} which='배경' />
            <ProjectDescription descriptions={description.implementation} which='구현' />
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
