import { Box, Flex, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
const Prosoft = () => {
    return (
        <Stack divider={<StackDivider />}>
            <Flex gap={3} flexDir={'column'}>
                <Flex alignItems={'baseline'} gap={2.5}>
                    <Heading fontSize={'2xl'}>프로소프트</Heading>
                    <Heading fontSize={'md'}>Web developer</Heading>
                    <Text fontSize={'sm'}>2023. 02 ~ </Text>
                </Flex>
            </Flex>
            <Flex p={3.5}>
                <Box w={'25%'}>
                    <Text fontWeight={'bold'}>자사 프레임워크 고도화</Text>
                    <Text color={'gray.500'}>2023.09 ~</Text>
                </Box>
                <Box w={'75%'}>
                    <Stack>
                        <Flex flexDir={'column'} gap={1}>
                            <Text> • 더미코드 제거 및 프레임워크의 관리 기준 코드 로딩 시간 단축 (5~6s &gt; 1~3s)</Text>
                            <Text> • 함수 로직 세분화, 널가드, 필요 없는 로직 제거 등 프레임워크 공통함수 리펙터링 </Text>
                            <Text> • 폼, 그리드, 차트, 웹소켓, 메일링 등 개발자가 바로 사용가능한 샘플 작성</Text>
                            <Text> • vitepress를 이용한 공통함수 분류 및 각 함수별 설명, 사용법 도큐먼트 작성</Text>
                        </Flex>
                    </Stack>
                </Box>
            </Flex>
            <Flex p={3.5}>
                <Box w={'25%'}>
                    <Text fontWeight={'bold'}>자사 프레임워크 구축 및 </Text>
                    <Text fontWeight={'bold'}>넥사크로 vue3 전환 작업</Text>
                    <Text color={'gray.500'}>2023.04 ~ 2023.09</Text>
                </Box>
                <Box w={'75%'}>
                    <Stack>
                        <Flex flexDir={'column'} gap={1}>
                            <Text> • Vue3/Typescript/Spring boot를 사용하여 이하의 모듈 설계 및 구현</Text>
                            <Text> • 화면 탭 구현</Text>
                            <Text> • 사용자 관련 기능 ( 로그인, 즐겨찾기, 메뉴 검색 )</Text>
                            <Text> • 검색조건 동적 생성</Text>
                            <Text> • 사용 중인 그리드의 함수 사용 간소화</Text>
                            <Text> • 서버사이드 라우팅, 서버사이드 i18n</Text>
                            <Text> • 엑셀 파일 관련 기능(읽기/업로드 등) 등 </Text>
                        </Flex>
                    </Stack>
                </Box>
            </Flex>
            <Flex p={3.5}>
                <Box w={'25%'}>
                    <Text fontWeight={'bold'}>DB 변환 작업 </Text>
                    <Text color={'gray.500'}>2023.03 ~ 2023.04</Text>
                </Box>
                <Box w={'75%'}>
                    <Stack>
                        <Flex flexDir={'column'} gap={1}>
                            <Text> • 기존 오라클 기준 문법으로 작성된 Mapper를 ANSI 표준 SQL문으로 변환</Text>
                        </Flex>
                    </Stack>
                </Box>
            </Flex>
            <Flex p={3.5}>
                <Box w={'25%'}>
                    <Text fontWeight={'bold'}>쿠팡 운영관리/세일즈</Text>
                    <Text fontWeight={'bold'}>솔루션 유지보수 </Text>
                    <Text color={'gray.500'}>2023.02 ~ 2023.12</Text>
                </Box>
                <Box w={'75%'}>
                    <Stack>
                        <Flex flexDir={'column'} gap={1}>
                            <Text> • Vue2 + Spring boot로 작성된 프로젝트의 유지보수 및 기능 추가</Text>
                        </Flex>
                    </Stack>
                </Box>
            </Flex>
        </Stack>
    )
}

export default Prosoft
