import { Flex, HStack, Heading, Link, Stack, Text } from '@chakra-ui/react'
const GumyonetBblog = () => {
    return (
        <Flex gap={3} flexDir={'column'}>
            <HStack alignItems={'baseline'} gap={2.5} flexWrap={'wrap'}>
                <HStack w={['100%', '100%', '100%', '49%', '49%', '49%']} flexWrap={'wrap'}>
                    <Heading w={['100%', '100%', '100%', '30%', '30%']} fontSize={'2xl'}>
                        BBlog
                    </Heading>
                    <Stack>
                        <Flex flexDir={'column'} gap={1}>
                            <Text> • React + Supabase + Markdown + TS</Text>
                            <Text> - 개인 블로그 </Text>
                            <Link color={'blue.600'} href='https://blog.gumyo.net/'>
                                📌 개인 블로그 사이트
                            </Link>
                        </Flex>
                    </Stack>
                </HStack>
                <HStack w={['100%', '100%', '100%', '49%', '49%', '49%']} flexWrap={'wrap'}>
                    <Heading w={['100%', '100%', '100%', '30%', '30%']} fontSize={'2xl'}>
                        gumyo.net
                    </Heading>
                    <Stack>
                        <Flex flexDir={'column'} gap={1}>
                            <Text> • Nextjs + Framer Motion + Three fiber + TS</Text>
                            <Text> - 개인 포트폴리오</Text>
                            <Flex gap={3} flexWrap={'wrap'}>
                                <Link color={'blue.600'} href='https://gumyo.net/'>
                                    📌 포트폴리오 사이트
                                </Link>
                                {/* <Link color={'blue.600'} href='https://hyns.dev/'>
                                    📌 블로그 사이트 (리뉴얼 준비)
                                </Link> */}
                            </Flex>
                        </Flex>
                    </Stack>
                </HStack>
            </HStack>
        </Flex>
    )
}

export default GumyonetBblog
