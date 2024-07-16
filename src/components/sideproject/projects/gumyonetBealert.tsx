import { Flex, HStack, Heading, Link, Stack, Text } from '@chakra-ui/react'
const GumyonetBealert = () => {
    return (
        <Flex gap={3} flexDir={'column'}>
            <HStack alignItems={'baseline'} gap={2.5} flexWrap={'wrap'}>
                <HStack w={['100%', '100%', '100%', '49%', '49%', '49%']} flexWrap={'wrap'}>
                    <Heading w={['100%', '100%', '100%', '30%', '30%']} fontSize={'2xl'}>
                        BBlog
                    </Heading>
                    <Stack>
                        <Flex flexDir={'column'} gap={1}>
                            <Text> • Nextjs + Supabase + Markdown + TS</Text>
                            <Text> - 개인 블로그 </Text>
                            <Link color={'blue.600'} href='https://blog.gumyo.net/'>
                                📌 개인 블로그 사이트
                            </Link>
                        </Flex>
                    </Stack>
                </HStack>
                <HStack w={['100%', '100%', '100%', '49%', '49%', '49%']} flexWrap={'wrap'}>
                    <Heading w={['100%', '100%', '100%', '30%', '30%']} fontSize={'2xl'}>
                        BeAlert
                    </Heading>
                    <Stack>
                        <Flex flexDir={'column'} gap={1}>
                            <Text> • Nextjs + FastAPI + TS + PWA</Text>
                            <Text> - 재난경보 Push Notification 앱</Text>
                            <Flex gap={3} flexWrap={'wrap'}>
                                <Link color={'blue.600'} href='https://alert.hyns.dev/'>
                                    📌 BeAlert 사이트
                                </Link>
                            </Flex>
                        </Flex>
                    </Stack>
                </HStack>
            </HStack>
        </Flex>
    )
}

export default GumyonetBealert
