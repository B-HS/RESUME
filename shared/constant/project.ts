export const projects = [
    {
      name: 'BBlog',
      url: ['https://blog.gumyo.net'],
      description: {
        background: [
          '기존 블로그의 성능 저하와 커스터마이징 한계로 유지보수성 확보가 어려운 상황',
          '소셜 피드(Misskey) 및 외부 콘텐츠를 통합 관리할 수 있는 개인 기술 플랫폼 필요',
        ],
        implementation: [
          'Next.js + TypeScript 기반 구조를 재설계하고 Drizzle + AWS Cognito를 이용한 인증 및 데이터 관리 체계를 구성',
          'Misskey API를 연동하여 외부 소셜 콘텐츠를 통합 관리할 수 있는 환경을 구축',
          '스토리지, 캐싱, CDN 등을 기능별로 모듈화하고 확장성을 고려한 아키텍처를 설계',
          '어드민 위젯을 추가하여 콘텐츠 관리 효율성을 향상',
        ],
        results: [
          '게시글, 소셜 콘텐츠, 기술 실험을 단일 플랫폼에서 관리 가능한 구조 확보',
          '인증, API 연동, 데이터 처리 등 서비스 핵심 기능 전반을 직접 구현한 경험 확보',
        ],
      },
    },
    {
      name: 'Kataru',
      url: ['https://kataru.dev', 'https://github.com/kataru-blog'],
      description: {
        background: [
          '개인 및 소규모 팀을 위한 SaaS형 블로그 및 콘텐츠 관리 플랫폼 필요',
          '클라우드 엣지 환경에서의 저비용 + 고가용 아키텍처 운영 자동화 실험 목표',
        ],
        implementation: [
          'Cloudflare Workers 기반 배포 파이프라인과 엣지 최적화 환경을 설계',
          'Hono 기반 라우팅 및 미들웨어 구성, FSD 스타일 모듈화 및 island 렌더링 구조를 구현',
          '관리 UI를 별도 레포지토리(kataru-admin)로 분리하고 Bun + React를 이용하여 인터페이스를 구축',
          '이미지 변환 서버(image-convert-server)를 별도로 구성하여 업로드 및 변환 비용과 성능을 제어',
        ],
        results: [
          '모놀리식 대비 배포 및 확장 과정을 단순화하고 정적 리소스 응답 지연을 최소화',
          '운영 및 관리 기능을 분리하여 변경 영향도를 줄이고 개발 파이프라인을 단순화',
          '레포 단위 모듈화로 기능 교체 및 확장 용이성을 확보',
        ],
      },
    },
    {
      name: 'Scrollbar TOC',
      url: ['https://github.com/B-HS/scrollbar-toc', 'https://b-hs.github.io/scrollbar-toc/'],
      description: {
        background: [
          '특정 프레임워크에 종속되지 않는 범용 TOC 컴포넌트 필요성',
        ],
        implementation: [
          '헤딩 자동 탐지 및 스크롤 비율 매핑 로직을 설계하여 동적 TOC 구성',
          'Zero-dependency 환경과 경량 번들(ESM 약2KB, CJS 약2.2KB)을 제공하는 구조를 구현',
        ],
        results: [
          'npm 설치 후 즉시 적용 가능한 범용 TOC 라이브러리를 제공',
          '문서형 페이지 및 블로그 등 다양한 환경에서 재사용 가능한 컴포넌트 확장성 확보',
        ],
      },
    },
    {
      name: '웹툰 북마커',
      url: ['https://chromewebstore.google.com/detail/네이버-웹툰-북마크/cnfglfaobnkgkcnagfbaeilbpkcjcanh'],
      description: {
        background: [
          '관심 웹툰만 별도로 확인하고자 하는 사용자 수요가 존재하나 플랫폼 내 필터링 기능이 부재',
          '작품 수 증가로 원하는 콘텐츠 접근성이 저하되는 문제 발생',
        ],
        implementation: [
          'React 기반 크롬 확장 프로그램 UI와 상태 관리 구조를 설계',
          'DOM 감지 로직을 통해 관심 웹툰 자동 필터링 기능을 구성',
          'Bun 기반 번들링 환경을 구축하고 빌드 성능을 최적화',
        ],
        results: [
          '기존 UI 흐름을 유지하면서 관심 작품만 선별 표시하는 기능 제공',
          '크롬 웹 스토어 등록 및 배포를 완료하여 브라우저 확장 기능 운영 경험 확보',
        ],
      },
    },
    {
      name: 'BCrawler',
      url: ['https://hot.gumyo.net/', 'https://github.com/B-HS/BCrawler'],
      description: {
        background: [
          '여러 쇼핑몰의 특가 정보를 한 곳에서 확인하고자 하는 사용자 수요 존재',
          '수동 검색의 번거로움과 시간 소모 문제를 해결할 필요 발생',
        ],
        implementation: [
          'Hono + Cheerio 기반 서버 사이드 크롤러를 구성하고 데이터 정제 로직을 설계',
          '서버리스 환경과 Cron 스케줄링 기반 정기 실행 파이프라인을 구축',
          '간결한 UI를 통해 특가 목록 제공 및 외부 링크 연결 기능을 구현',
        ],
        results: [
          '자동화된 특가 정보 수집 및 사용자 접근성 향상',
          '다수 사이트를 빠르게 비교할 수 있는 통합 뷰를 제공하여 사용자 편의성 개선',
        ],
      },
    },
    {
      name: 'BIcon',
      url: ['https://bicon.gumyo.net', 'https://github.com/B-HS/BIcon'],
      description: {
        background: [
          'README 및 문서용 뱃지 제작을 위해 외부 도구에 의존해야 하는 불편함 존재',
          '입력값 기반 실시간 이미지 생성 및 커스터마이징 기능 필요',
        ],
        implementation: [
          'Next.js 기반 동적 이미지 렌더링 구조를 설계하고 SVG 생성 로직을 구성',
          '입력 파라미터(텍스트, 색상, 크기 등)에 따른 실시간 뱃지 생성 기능을 구현',
          '이미지 URL 및 Markdown 코드 자동 생성 기능을 제공',
        ],
        results: [
          '외부 도구 의존 없이 빠른 뱃지 생성 및 커스터마이징 가능',
          '프로젝트 문서와 오픈소스 README 관리 생산성을 향상',
        ],
      },
    },
    {
      name: 'RESUME',
      url: ['https://github.com/B-HS/RESUME'],
      description: {
        background: [
          '기존 이력서 양식이 원하는 구조를 지원하지 않아 커스터마이징이 어려운 문제 발생',
        ],
        implementation: [
          'Next.js 기반 이력서 사이트 구조를 설계하고 컴포넌트 단위로 분리',
          'JSON 기반 데이터 모델링을 통해 경력 및 프로젝트 확장성을 확보',
        ],
        results: [
          '이력서를 확장 가능한 기술 자산으로 전환',
          '경력과 프로젝트를 단일 시스템에서 통합 관리 가능한 구조 확보',
        ],
      },
    },
  ]