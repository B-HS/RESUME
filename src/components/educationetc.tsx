import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'

const EducationEtc = () => {
    return (
        <Box>
            <Heading fontSize={'3xl'} mb={2}>
                Education / etc.
            </Heading>
            <Stack gap={2} p={2.5}>
                <Flex>
                    <Text w={'15%'}>- 14.03 ~ 19.02</Text>
                    <Text> • 마산대학교 관광일본어</Text>
                </Flex>
                <Flex>
                    <Text w={'15%'}>- 18.09 ~ 19.01</Text>
                    <Text> • 夢乃井 인턴쉽</Text>
                </Flex>
                <Flex>
                    <Text w={'15%'}>- 19.05 </Text>
                    <Text> • 6th 동아시아 농업유산 학회 현장견학 KR - JP 동시통역</Text>
                </Flex>
                <Flex>
                    <Text w={'15%'}>- 22.04 ~ 22.10</Text>
                    <Text> • 부산 동성 직업 전문학교 풀스택 과정</Text>
                </Flex>
            </Stack>
        </Box>
    )
}

export default EducationEtc
