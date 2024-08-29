import { Fragment } from 'react'

export const history = {
    codinghub: {
        title: '한국글로벌널리지네트웍(주)',
        subtitle: '前 코딩허브, 인수 합병',
        job: 'Frontend developer',
        working: '2024. 03 ~',
        history: {
            otherCompany: {
                title: '타사 홈페이지 개발',
                duration: '2024. 07',
                description: [
                    '프로젝트 구조, 공통 레이아웃 설계 및 작성',
                    '지원서 페이지를위한 어드민 페이지 설계 및 작성',
                    'prisma + sqlite를 이용한 api 설계 및 작성',
                ],
            },
            flunti: {
                title: 'flunti.io 서비스 개발 및 고도화',
                duration: '2024.03 ~',
                description: [
                    '공통 레이아웃 작성 및 페이지 제작',
                    '모달, 버튼, 아코디언 등 공통 컴포넌트 설계 및 작성',
                    '프로젝트 아키텍쳐 변환(FSD) 및 Storybook 도입',
                    '에러 추적을 위한 HyperDX 도입',
                ],
            },
            lms: {
                title: 'LMS 개발',
                duration: '2024.05 ~ 2024.06',
                description: [
                    '프로젝트 구조, 공통 레이아웃 설계 및 작성',
                    'ReactPlayer를 이용한 플레이어 설계 및 작성',
                    '그리드용 공통 테이블 컴포넌트 설계 및 작성',
                    '일부 컴포넌트 예시를 위한 Storybook 작성',
                    '공통 Fetching API함수 설계 및 작성',
                ],
            },
        },
    },
    prosoft: {
        title: '프로소프트',
        job: 'Fullstack developer',
        working: '2023. 02 ~ 2024. 02',
        history: {
            solution: {
                title: '자사 프레임워크 고도화',
                duration: '2023.09 ~ 2024. 02',
                description: [
                    '공통 함수 로직 최적화 및 로드시간 단축(약 2배)을 위한 프레임워크단 함수 리펙터링',
                    '날짜, 드롭박스, 세부검색 모달 등이 포함된 검색조건 동적 생성 모듈 리펙터링',
                    '웹소켓을 이용한 전역 모듈 구현 및 쪽지, 알람 구현',
                    '폼, 그리드, 차트, 웹소켓, 메일링 등 개발자가 바로 사용가능한 샘플 작성',
                    'PDF to Image 모듈 작성, CMS형 게시판 설계 및 구현',
                    'fabric.js를 이용한 이미지 수정/저장 기능 모듈 설계 및 도면관리 모듈 구현',
                    'express + vue를 활용하여 모듈 난독화 + 데모 파일 배포 페이지 설계/구현',
                    'vitepress를 이용한 공통함수 분류 및 각 함수별 설명, 사용법 도큐먼트 작성',
                ],
            },
            solutionBuild: {
                title: (
                    <Fragment>
                        <p>자사 프레임워크 구축 및</p>
                        <p>넥사크로 vue3 전환 작업</p>
                    </Fragment>
                ),
                duration: '2023.04 ~ 2023.09',
                description: [
                    'Vue3/Typescript/Spring boot를 사용하여 이하의 모듈 설계 및 구현',
                    '화면 탭 구현',
                    '사용자 관련 기능 ( 로그인, 즐겨찾기, 메뉴 검색 )',
                    '검색조건 동적 생성',
                    '사용 중인 그리드의 함수 사용 간소화',
                    '서버사이드 라우팅, 서버사이드 i18n',
                    '엑셀 파일 관련 기능(읽기/업로드 등) 등',
                ],
            },
            dbConvert: {
                title: 'DB 변환 작업',
                duration: '2023.03 ~ 2023.04',
                description: ['기존 오라클 기준 문법으로 작성된 Mapper를 ANSI 표준 SQL문으로 변환'],
            },
            solutionSm: {
                title: (
                    <Fragment>
                        <p>쿠팡 운영관리/세일즈</p>
                        <p>솔루션 유지보수</p>
                    </Fragment>
                ),
                duration: '2023.02 ~ 2024.01',
                description: ['Vue2 + Spring boot로 작성된 프로젝트의 유지보수 및 기능 추가'],
            },
        },
    },
    keywordsStudios: {
        title: 'Keywords Studios Tokyo',
        job: 'LQA / QA',
        working: '2019. 07 ~ 2022. 01',
        history: {
            testingPub: {
                title: '게임 테스팅 참여 및 출시',
                description: [
                    '브레이브리 디폴트 II(스위치/스팀), XLOG(CMS)',
                    '니어 리[인]카네이션, FFBE WOTV',
                    '디지몬 리얼라이즈, 소드아트 온라인 엘리시제이션',
                    '악마성 그리모어오브 소울즈 등',
                ],
            },
            testing: {
                title: '게임 테스팅 참여',
                description: ['FFBE', 'FFBE WOTV'],
            },
        },
    },
}
