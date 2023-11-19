import { Box, Flex, HStack, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
const Keywords = () => {
    return (
        <Stack divider={<StackDivider />}>
            <Flex gap={3} flexDir={'column'} pt={7}>
                <HStack alignItems={'baseline'} gap={2.5} flexWrap={'wrap'}>
                    <Heading fontSize={'2xl'}>Keywords Studios Tokyo</Heading>
                    <Heading fontSize={'md'}>LQA / QA</Heading>
                    <Text fontSize={'sm'}>2019. 07 ~ 2022. 01</Text>
                </HStack>
            </Flex>
            <HStack p={3.5} flexWrap={'wrap'} justifyContent={'space-between'}>
                <Box>
                    <Text fontWeight={'bold'}>게임 테스팅 참여 및 출시</Text>
                </Box>
                <Box w={["'75%'", '100%', '75%', '75%', '75%']}>
                    <Stack>
                        <Flex flexDir={'column'} gap={1}>
                            <Text> • 브레이브리 디폴트 II(스위치/스팀), XLOG(CMS) </Text>
                            <Text> • 니어 리[인]카네이션, FFBE WOTV </Text>
                            <Text> • 디지몬 리얼라이즈, 소드아트 온라인 엘리시제이션 </Text>
                            <Text> • 악마성 그리모어오브 소울즈 등 </Text>
                        </Flex>
                    </Stack>
                </Box>
            </HStack>
            <HStack p={3.5} flexWrap={'wrap'} justifyContent={'space-between'}>
                <Box>
                    <Text fontWeight={'bold'}>게임 온고잉 테스트 참여</Text>
                </Box>
                <Box w={["'75%'", '100%', '75%', '75%', '75%']}>
                    <Stack>
                        <Flex flexDir={'column'} gap={1}>
                            <Text>
                                •
                                FFBE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Text>
                            <Text> • FFBE WOTV</Text>
                        </Flex>
                    </Stack>
                </Box>
            </HStack>
        </Stack>
    )
}
export default Keywords
