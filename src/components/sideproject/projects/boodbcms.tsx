import { Flex, HStack, Heading, Link, Stack, Text } from '@chakra-ui/react'
const BoodBcms = () => {
    return (
        <Flex gap={3} flexDir={'column'}>
            <HStack alignItems={'baseline'} gap={2.5} flexWrap={'wrap'}>
                {/* <HStack w={['100%', '100%', '100%', '49%', '49%', '49%']} flexWrap={'wrap'}>
                    <Heading w={['100%', '100%', '100%', '30%', '30%']} fontSize={'2xl'}>
                        BOOD
                    </Heading>
                    <Stack>
                        <Flex flexDir={'column'} gap={1}>
                            <Text> • Nextjs + Express + Prisma + TS</Text>
                            <Text> - 구내식당 식단표 web push 프로젝트</Text>
                            <Link color={'blue.600'} href='https://github.com/B-HS/BOOD'>
                                📌 https://github.com/B-HS/BOOD
                            </Link>
                            <Link color={'blue.600'} href='https://food.gumyo.net'>
                                📌 https://food.gumyo.net
                            </Link>
                        </Flex>
                    </Stack>
                </HStack> */}
                <HStack w={['100%', '100%', '100%', '49%', '49%', '49%']} flexWrap={'wrap'}>
                    <Heading w={['100%', '100%', '100%', '30%', '30%']} fontSize={'2xl'}>
                        B_CMS
                        <Text fontSize={'sm'}>(진행 중)</Text>
                    </Heading>

                    <Stack>
                        <Flex flexDir={'column'} gap={1}>
                            <Text> • vue3 + Spring boot + TS </Text>
                            <Text> - B2B 플랫폼에서 자주 쓰이는 형태의 CMS 작성 </Text>
                            <Link color={'blue.600'} href='https://github.com/B-HS/B_CMS'>
                                📌 https://github.com/B-HS/B_CMS
                            </Link>
                        </Flex>
                    </Stack>
                </HStack>
            </HStack>
        </Flex>
    )
}
export default BoodBcms
