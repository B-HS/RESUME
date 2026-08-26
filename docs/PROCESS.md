# 작업: BBlog go-to-top / virtual-scroll 이식

## 체크리스트

- [x] a. BBlog 소스 파악 — `widgets/layout/go-to-top.tsx`, `features/theme/virtual-scroll.tsx`, `app/layout.tsx` 마운트 위치 확인
- [x] b. RESUME 구조 파악 — FSD alias(`@app`/`@widgets`/`@features`/`@entities`/`@shared`), shadcn 설정(`components.json`), Button 컴포넌트 부재 확인
- [x] c. `shared/ui/button.tsx` 추가 — arrow function/inline export 컨벤션으로 변환. 동시 작업 중이던 peer 세션(`resume-7d`)이 이미 `radix-ui` 통합 패키지로 `separator.tsx` 를 추가해둔 것을 뒤늦게 발견 → Button 도 `@radix-ui/react-slot` 단독 패키지 대신 동일하게 `radix-ui` 통합 패키지(`Slot.Root`)로 맞춤(중복 의존성 제거)
- [x] d. `features/theme/virtual-scroll.tsx` 이식 — 외부 alias 의존 없어 변경 없이 그대로 복사
- [x] e. `widgets/layout/go-to-top.tsx` 이식 — import 경로를 `@shared/lib/utils`, `@shared/ui/button` 으로 조정
- [x] f. `app/[lang]/layout.tsx` 에 마운트 — body 내부에 `VirtualScroll`, `GoToTop` 추가
- [x] g. 검증 — typecheck 통과, format(package.json 개행 수정) 통과. `shared/translations/words.ts` 포맷 경고는 이 작업 범위 밖(기존 미커밋 변경)이라 미수정
