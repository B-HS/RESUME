import { Box, Heading, Stack, Text } from '@chakra-ui/react'

const Intro = () => {
    return (
        <Box>
            <Heading fontSize={'3xl'} mb={2}>
                Introduce
            </Heading>
            <Stack gap={5} p={2.5}>
                <Text>
                    19년도 LQA / QA로 경력을 시작하여 2023년 웹 개발을 시작하였으며 오라클 DB to MARIADB를 위한 ANSI표준 형태의 DB변환, 이후 Vue3와
                    TS를 이용하여 자사 프레임워크 개발 및 개발 중인 프레임워크를 이용하여 넥사크로로 작성된 AMS/WMS시스템의 Vue3의 전환 작업을
                    끝냈으며 이후 프레임워크 고도화를 진행 중입니다.
                </Text>
                <Text>
                    최대한 쉬운 코드를 지향합니다. 공통 모듈들을 작성하면서 협업을 위한 코드, 자신의 허영심이 아닌 모두가 같이 읽고 모두가 수정
                    가능하며 그렇다고 느리지 않은, 최적화된 코드를 최우선으로 생각합니다.
                </Text>
            </Stack>
        </Box>
    )
}

export default Intro
