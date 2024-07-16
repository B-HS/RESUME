import { Box, Flex, HStack, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
const Codinghub = () => {
    return (
        <Stack divider={<StackDivider />}>
            <Flex gap={3} flexDir={'column'}>
                <sub className='pl-1'>前 코딩허브, 인수 합병</sub>
                <HStack alignItems={'baseline'} gap={2.5} flexWrap={'wrap'}>
                    <Heading fontSize={'2xl'}>한국글로벌널리지네트웍(주)</Heading>

                    <Heading fontSize={'md'}>Frontend developer</Heading>
                    <Text fontSize={'sm'}>2024. 03 ~ </Text>
                </HStack>
            </Flex>
            <HStack p={3.5} flexWrap={'wrap'} justifyContent={'space-between'}>
                <Box>
                    <Text fontWeight={'bold'}>타사 홈페이지 개발</Text>
                    <Text color={'gray.500'}>2024.07 ~</Text>
                </Box>
                <Box w={['75%', '100%', '75%', '75%', '75%']}>
                    <Stack>
                        <Flex flexDir={'column'} gap={1}>
                            <Text> • 프로젝트 구조, 공통 레이아웃 설계 및 작성</Text>
                            <Text> • 지원서 페이지를위한 어드민 페이지 설계 및 작성</Text>
                            <Text> • prisma + sqlite를 이용한 api 설계 및 작성</Text>
                        </Flex>
                    </Stack>
                </Box>
            </HStack>

            <HStack p={3.5} flexWrap={'wrap'} justifyContent={'space-between'}>
                <Box>
                    <Text fontWeight={'bold'}>flunti.io 서비스 개발 및 고도화</Text>
                    <Text color={'gray.500'}>2024.03 ~</Text>
                </Box>
                <Box w={['75%', '100%', '75%', '75%', '75%']}>
                    <Stack>
                        <Flex flexDir={'column'} gap={1}>
                            <Text> • 공통 레이아웃 작성 및 페이지 제작</Text>
                            <Text> • 모달, 버튼, 아코디언 등 공통 컴포넌트 설계 및 작성 </Text>
                            <Text> • 프로젝트 아키텍쳐 변환(FSD) 및 Storybook 도입</Text>
                            <Text> • 에러 추적을 위한 HyperDX 도입</Text>
                        </Flex>
                    </Stack>
                </Box>
            </HStack>

            <HStack p={3.5} flexWrap={'wrap'} justifyContent={'space-between'}>
                <Box>
                    <Text fontWeight={'bold'}>LMS 개발</Text>
                    <Text color={'gray.500'}>2024.05 ~ 2024.06</Text>
                </Box>
                <Box w={['75%', '100%', '75%', '75%', '75%']}>
                    <Stack>
                        <Flex flexDir={'column'} gap={1}>
                            <Text> • 프로젝트 구조, 공통 레이아웃 설계 및 작성</Text>
                            <Text> • ReactPlayer를 이용한 플레이어 설계 및 작성</Text>
                            <Text> • 그리드용 공통 테이블 컴포넌트 설계 및 작성</Text>
                            <Text> • 일부 컴포넌트 예시를 위한 Storybook 작성</Text>
                            <Text> • 공통 Fetching API함수 설계 및 작성</Text>
                        </Flex>
                    </Stack>
                </Box>
            </HStack>
        </Stack>
    )
}

export default Codinghub
