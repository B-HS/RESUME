import { ProfileLinkElement } from '@features/common/section'
import { blogLinks, emailLinks, githubLinks, imageUrl, toyLinks } from '@shared/constant'
import { Gamepad2, Github, Mail, Newspaper } from 'lucide-react'

export const ContractWidget = () => {
    return (
        <section className='flex items-center justify-center gap-8 w-full flex-wrap pt-10'>
            <section className='relative size-52 rounded-md overflow-hidden flex-shrink-0'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img width={208} height={208} className='object-cover' alt='Profile Image' src={imageUrl} />
            </section>

            <section className='grid grid-cols-1 gap-7 md:grid-cols-2 sm:grid-cols-1 flex-auto'>
                <ProfileLinkElement links={emailLinks} icon={<Mail className='w-5 h-5 text-neutral-600' />} />
                <ProfileLinkElement links={blogLinks} icon={<Newspaper className='w-5 h-5 text-neutral-600' />} />
                <ProfileLinkElement links={githubLinks} icon={<Github className='w-5 h-5 text-neutral-600' />} />
                <ProfileLinkElement links={toyLinks} icon={<Gamepad2 className='w-5 h-5 text-neutral-600' />} />
            </section>
        </section>
    )
}
