import { Box, Heading, Stack, Text } from '@chakra-ui/react'

const Intro = () => {
    return (
        <Box>
            <Heading fontSize={'3xl'} mb={2}>
                Introduce
            </Heading>
            <Stack gap={5} p={2.5}>
                <Text>
                    23년 웹 개발을 시작하였으며 오라클 DB to MARIADB를 위한 ANSI표준 형태의 DB변환, 이후 Vue3와 TS를 이용하여 자사 프레임워크 개발 및
                    개발 중인 프레임워크를 이용하여 넥사크로로 작성된 AMS/WMS시스템의 Vue3의 전환 작업을 끝냈으며 이후 프레임워크 고도화를 진행
                    하였습니다.
                </Text>
                <Text>
                    프로소프트 회사에서는 vue를 이용한 프론트엔드 프레임워크 설계를 주도하였으며 공통 모듈 등의 설계및 개발을 진행해왔으며, 구축 후
                    추가적으로 들어오는 요구사항을 받아 설계/구현 후 개발자의 보다 빠른 프레임워크 개발을 위한 모든 예시페이지, 도큐먼트를 작성을
                    수행하였습니다.
                </Text>
                <Text>
                    개인적인 개발로는 불편함을 해결하는 것을 주로 개발에 녹여내고 있습니다. 매일 확인하는 환율, 즐겨보는 웹툰 등의 없는 기능 등을 직접
                    손으로 구현 및 배포해보았습니다.
                </Text>
            </Stack>
        </Box>
    )
}

export default Intro
