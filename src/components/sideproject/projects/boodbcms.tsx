import { Flex, Heading, Link, Stack, Text } from '@chakra-ui/react'
const BoodBcms = () => {
    return (
        <Flex gap={3} flexDir={'column'}>
            <Flex alignItems={'baseline'} gap={2.5}>
                <Flex w={'50%'}>
                    <Heading w={'30%'} fontSize={'2xl'}>
                        BOOD
                    </Heading>
                    <Stack w={'70%'}>
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
                </Flex>
                <Flex w={'50%'}>
                    <Heading w={'30%'} fontSize={'2xl'}>
                        B_CMS
                        <Heading fontSize={'sm'}>(진행 중)</Heading>
                    </Heading>
                    <Stack w={'70%'}>
                        <Flex flexDir={'column'} gap={1}>
                            <Text> • vue3 + Spring boot + TS </Text>
                            <Text> - B2B 플랫폼에서 자주 쓰이는 형태의 CMS 작성 </Text>
                            <Link color={'blue.600'} href='https://github.com/B-HS/B_CMS'>
                                📌 https://github.com/B-HS/B_CMS
                            </Link>
                        </Flex>
                    </Stack>
                </Flex>
            </Flex>
        </Flex>
    )
}
export default BoodBcms
