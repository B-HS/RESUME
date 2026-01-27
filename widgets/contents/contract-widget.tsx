import { ProfileLinkElement } from '@features/common/section'
import { blogLinks, emailLinks, githubLinks } from '@shared/constant'
import { Github, Mail, Newspaper } from 'lucide-react'

export const ContractWidget = () => {
    return (
        <section className='w-full p-5'>
            <section className='flex flex-wrap justify-between'>
                <ProfileLinkElement links={emailLinks} icon={<Mail className='size-5 text-background' />} />
                <ProfileLinkElement links={blogLinks} icon={<Newspaper className='size-5 text-background' />} />
                <ProfileLinkElement links={githubLinks} icon={<Github className='size-5 text-background' />} />
            </section>
        </section>
    )
}
