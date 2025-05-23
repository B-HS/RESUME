export const projects = [
    {
        name: 'BBlog',
        url: ['https://blog.gumyo.net'],
        description: {
            background: ['기존 블로그는 느리고 수정이 불가, 최신 기술 적용 불가', 'Misskey 연동 등 다양한 콘텐츠를 통합하고 싶었음.'],
            implementation: ['Next.js + TypeScript 기반 구조 구성', 'Drizzle, Cognito로 인증·데이터 처리', 'Misskey API로 외부 콘텐츠 통합'],
            results: ['기술 실험과 통합이 쉬운 커스터마이징 블로그 완성', '게시글 외 콘텐츠까지 아우르는 개인사이트 구축'],
        },
    },
    {
        name: '웹툰 북마커',
        url: ['https://chromewebstore.google.com/detail/네이버-웹툰-북마크/cnfglfaobnkgkcnagfbaeilbpkcjcanh'],
        description: {
            background: ['관심 웹툰만 따로 보고 싶었지만 필터링 기능이 부재.', '웹툰이 너무많아 찾기가 불편.'],
            implementation: ['React 기반 크롬 확장앱 구성', '웹툰 정보 감지 후 상태 관리 구현', 'Bun으로 빌드 최적화'],
            results: ['기존UI와 동일한 추가기능 구현', '크롬스토어에 등록해 도구화 완료'],
        },
    },
    {
        name: 'Burrency',
        url: ['https://github.com/B-HS/Burrency'],
        description: {
            background: ['환율 변동을 수시로 확인하기 불편, 자동화 도구가 필요'],
            implementation: ['크롤링 기반 환율 모니터 구조 설계', 'Hono + Vite로 백엔드 구성', 'Electron 앱으로 확장 예정 (2Q)'],
            results: ['실시간 기반 환율 확인 도구 설계', '개인 재무 관리를 위한 정보 자동화 실현'],
        },
    },
    {
        name: 'BCrawler',
        url: ['https://hot.gumyo.net/'],
        description: {
            background: ['특가 정보를 찾기 위해 여러 사이트를 전전하는 불편함을 느낌'],
            implementation: ['Next.js + Prisma로 크롤링 데이터 정제', '최소 UI로 정보 접근성 확보'],
            results: ['특가 정보 수집·정리 자동화 경험 확보', '다수의 사이트를 빠르게 확인'],
        },
    },
    {
        name: 'template',
        url: ['https://github.com/B-HS/template'],
        description: {
            background: ['프로젝트 시작마다 반복되는 환경 설정이 번거로웠음.'],
            implementation: ['Next.js + TypeScript 템플릿 구조 설계', '라우팅·상태관리 등 초기 세팅 구성'],
            results: ['세팅 시간 단축, 반복 작업 최소화', '일관된 개발 환경 기반 생산성 향상'],
        },
    },
    {
        name: 'BIcon',
        url: ['https://bicon.gumyo.net'],
        description: {
            background: ['README용 뱃지를 만들기 위해 외부사이트이용'],
            implementation: ['Next.js 기반 뱃지 생성기 구현', '입력값에 따라 실시간 이미지 생성'],
            results: ['뱃지를 쉽고 빠르게 생성할 수 있는 도구 제공', '외부툴에 의존하지않은 개인 뱃지 생성'],
        },
    },
    {
        name: 'RESUME',
        url: ['https://github.com/B-HS/RESUME'],
        description: {
            background: ['원하는 스타일의 이력서 스타일 부재'],
            implementation: ['Next.js로 이력서 사이트 구성', 'JSON 기반 컴포넌트 구조 설계'],
            results: ['이력서를 확장 가능한 기술 자산으로 전환', '경력·프로젝트를 통합 관리 가능한 구조 완성'],
        },
    },
]
