import { ProfileLinkElement } from '@features/common/section'
import { blogLinks, emailLinks, githubLinks } from '@shared/constant'
import { Github, Mail, Newspaper } from 'lucide-react'

export const ContractWidget = () => {
    return (
        <section className='w-full p-5'>
            <section className='flex flex-wrap justify-between'>
                <ProfileLinkElement links={emailLinks} icon={<Mail className='w-5 h-5 text-neutral-600' />} />
                <ProfileLinkElement links={blogLinks} icon={<Newspaper className='w-5 h-5 text-neutral-600' />} />
                <ProfileLinkElement links={githubLinks} icon={<Github className='w-5 h-5 text-neutral-600' />} />
            </section>
        </section>
    )
}
