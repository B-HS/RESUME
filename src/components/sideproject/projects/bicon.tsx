import { Flex, HStack, Heading, Link, Stack, Text } from '@chakra-ui/react'
const BIcon = () => {
    return (
        <Flex gap={3} flexDir={'column'}>
            <HStack alignItems={'baseline'} gap={2.5} flexWrap={'wrap'}>
                <HStack w={['100%', '100%', '100%', '49%', '49%', '49%']} flexWrap={'wrap'}>
                    <Heading w={['100%', '100%', '100%', '30%', '30%']} fontSize={'2xl'}>
                        BIcon
                    </Heading>
                    <Stack>
                        <Flex flexDir={'column'} gap={1}>
                            <Text> • Nextjs + TS</Text>
                            <Text> - 뱃지 아이콘 이미지 생성 사이트</Text>
                            <Link color={'blue.600'} href='https://bicon.gumyo.net/'>
                                📌 BIcon 사이트
                            </Link>
                        </Flex>
                    </Stack>
                </HStack>
            </HStack>
        </Flex>
    )
}
export default BIcon
