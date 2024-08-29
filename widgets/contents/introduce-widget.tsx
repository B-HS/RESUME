import { SectionHeader } from '@features/common/section'
import Link from 'next/link'

export const IntroduceWidget = () => {
    return (
        <SectionHeader title='Introduce'>
            <section className='space-y-3'>
                <p>Next.js, React를 주로 사용하는 프론트엔드 개발자입니다.</p>
                <p>
                    현재 업무는 프로젝트 초기의 구조 설계 및 공용 컴포넌트 개발, 디자이너와 협업하여 컴포넌트 설계 및 페이지 개발, 필요에 따른 간단한
                    api작성 등 프론트엔드 전반을 담당 하고있습니다.
                </p>
                <p>
                    이전 회사에서는 vue를 이용한 프론트엔드 프레임워크 설계를 주도하였으며 공통 모듈 등의 설계및 개발을 진행해왔으며, 구축 후
                    추가적으로 들어오는 요구사항을 받아 설계/구현 후 개발자의 보다 빠른 프레임워크 개발을 위한 모든 예시페이지, 도큐먼트를 작성을
                    수행하였습니다.
                </p>
                <p>
                    개인적인 개발로는 불편함을 해결하는 것을 주로 개발에 녹여내고 있습니다. 매일 확인하는 환율, 즐겨보는 웹툰 사이트의 없는 기능, 각
                    사이트의 특가정보를 모아보는 사이트, 재난정보 알림을 푸시알람으로 작성하는 등 직접 손으로 구현 및 배포 및 사용 중입니다.
                </p>
                <p>
                    프론트에 국한하지 않고 백엔드도 같이 즐기고 있습니다. 최근에는 Honojs를 이용한 백엔드 서버를 구축하고 있으며, 이를 이용한
                    재난경보를 푸시 알람으로 전송시켜주는
                    <Link className='text-blue-500 hover:text-blue-500/50 px-1' href='https://github.com/B-HS/BeAlert'>
                        BeAlert
                    </Link>
                    pwa앱을 작성하는 등 재미있게 개발을 이어나가고 있습니다.
                </p>
            </section>
        </SectionHeader>
    )
}
