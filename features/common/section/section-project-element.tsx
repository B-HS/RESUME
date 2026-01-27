import { projectLabels } from '@shared/constant'
import { cn } from '@shared/utils'
import { ExternalLink } from 'lucide-react'
import { FC } from 'react'

type Lang = 'ko' | 'jp'
type LabelType = 'background' | 'implementation' | 'results'

const ProjectDescription: FC<{ descriptions: string[]; labelType: LabelType; lang: Lang }> = ({ descriptions, labelType, lang }) => {
    const label = projectLabels[lang][labelType]
    const labelColor =
        labelType === 'background'
            ? 'text-primary/90 border-primary/70'
            : labelType === 'implementation'
              ? 'text-blue-600 border-blue-500'
              : 'text-green-600 border-green-500'

    return (
        <div className='flex mb-2'>
            <div className={cn('shrink-0 font-semibold text-primary/70 border-border border-r-3 pr-3.5', labelColor)}>{label}</div>
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

const SideProjectItem = ({
    name,
    url,
    description,
    lang,
}: {
    name: string
    url: string[]
    description: { background: string[]; implementation: string[]; results: string[] }
    lang: Lang
}) => {
    return (
        <div className='border-border py-5 w-full'>
            <h3 className='font-bold mb-3.5 text-primary/80'>
                <a
                    href={url[0]}
                    target='_blank'
                    rel='noreferrer'
                    className='text-primary text-2xl inline-flex items-center gap-2 border-b-2 pb-0.5 hover:border-primary border-transparent transition-all'>
                    {name} <ExternalLink size={16} />
                </a>
            </h3>
            <ProjectDescription descriptions={description.background} labelType='background' lang={lang} />
            <ProjectDescription descriptions={description.implementation} labelType='implementation' lang={lang} />
            <ProjectDescription descriptions={description.results} labelType='results' lang={lang} />
        </div>
    )
}

export const SectionProjectElement = ({
    projectList,
    lang,
}: {
    projectList: { name: string; url: string[]; description: { background: string[]; implementation: string[]; results: string[] } }[]
    lang: Lang
}) => {
    return (
        <div className='flex flex-wrap justify-between'>
            {projectList.map((project) => (
                <SideProjectItem key={project.name} {...project} lang={lang} />
            ))}
        </div>
    )
}
