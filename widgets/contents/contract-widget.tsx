import { SectionHeader } from '@features/common/section'
import { Links } from '@features/contract'
import { blogLinks, emailLinks, githubLinks, imageUrl, toyLinks } from '@shared/constant'
import Image from 'next/image'
import { Fragment } from 'react'

export const ContractWidget = () => {
    return (
        <Fragment>
            <section className='relative size-64 overflow-hidden rounded mt-7 border-2'>
                <Image width={256} height={256} className='scale-[101%] object-fill' alt='Profile Image' src={imageUrl} priority={true} />
            </section>
            <SectionHeader title='Contract'>
                <Links links={emailLinks} />
                <Links links={blogLinks} />
                <Links links={githubLinks} />
                <Links links={toyLinks} />
            </SectionHeader>
        </Fragment>
    )
}