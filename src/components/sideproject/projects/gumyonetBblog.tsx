import { Flex, HStack, Heading, Link, Stack, Text } from '@chakra-ui/react'
const GumyonetBblog = () => {
    return (
        <Flex gap={3} flexDir={'column'}>
            <Flex alignItems={'baseline'} gap={2.5}>
                <HStack w={'100%'} flexWrap={'wrap'}>
                    <Heading w={['100%', '100%', '100%', '15%', '15%']} fontSize={'2xl'}>
                        gumyo.net{' '}
                        <Text fontSize={'sm'} color={'gray.500'}>
                            (+ BBlog, 운영 중지)
                        </Text>
                    </Heading>
                    <Stack>
                        <Flex flexDir={'column'} gap={1}>
                            <Text> • Nextjs + Framer Motion + Three fiber + Spring Boot + Cloudflare R2 </Text>
                            <Text> - 개인 포트폴리오 및 블로그 프로젝트</Text>
                            <Flex gap={3} flexWrap={'wrap'}>
                                <Link color={'blue.600'} href='https://gumyo.net/'>
                                    📌 포트폴리오 사이트
                                </Link>
                                {/* <Link color={'blue.600'} href='https://hyns.dev/'>
                                    📌 블로그 사이트 (리뉴얼 준비)
                                </Link> */}
                            </Flex>
                            <Flex gap={3} flexWrap={'wrap'}>
                                <Link color={'blue.600'} href='https://github.com/B-HS/gumyo.net'>
                                    📌 https://github.com/B-HS/gumyo.net
                                </Link>
                                <Link color={'blue.600'} href='https://github.com/B-HS/BBlog'>
                                    📌 https://github.com/B-HS/BBlog
                                </Link>
                            </Flex>
                        </Flex>
                    </Stack>
                </HStack>
            </Flex>
        </Flex>
    )
}

export default GumyonetBblog
