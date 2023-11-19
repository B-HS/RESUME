import { Box, HStack, Heading, Stack, Text } from '@chakra-ui/react'

const EducationEtc = () => {
    const data = [
        { period: '14.03 ~ 19.02', name: '마산대학교 관광일본어' },
        { period: '18.09 ~ 19.01', name: '夢乃井 인턴쉽' },
        { period: '19.05', name: '6th 동아시아 농업유산 학회 현장견학 KR - JP 동시통역' },
        { period: '22.04 ~ 22.10', name: '부산 동성 직업 전문학교 풀스택 과정' },
    ] as Record<string, string>[]
    return (
        <Box>
            <Heading fontSize={'3xl'} mb={2}>
                Education / etc.
            </Heading>
            <Stack gap={2} p={2.5}>
                {data.map((ele) => (
                    <HStack key={ele.name} flexWrap={'wrap'}>
                        <Text fontWeight={'bold'} w={['100%', '100%', '15%', '15%', '15%']}>
                            - {ele.period}
                        </Text>
                        <Text> • {ele.name}</Text>
                    </HStack>
                ))}
            </Stack>
        </Box>
    )
}

export default EducationEtc
