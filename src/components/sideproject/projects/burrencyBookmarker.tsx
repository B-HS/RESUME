import { Flex, Heading, Link, Stack, Text } from '@chakra-ui/react'
const BurrencyBookmarker = () => {
    return (
        <Flex gap={3} flexDir={'column'}>
            <Flex alignItems={'baseline'} gap={2.5}>
                <Flex w={'50%'}>
                    <Heading w={'30%'} fontSize={'2xl'}>
                        Burrency
                    </Heading>
                    <Stack w={'70%'}>
                        <Flex flexDir={'column'} gap={1}>
                            <Text> • Electron + React + Nestjs + TS</Text>
                            <Text>- Nestjs 스케쥴링을 이용하여 환율 페이지 크롤링</Text>
                            <Link color={'blue.600'} href='https://github.com/B-HS/Burrency'>
                                📌 https://github.com/B-HS/Burrency
                            </Link>
                        </Flex>
                    </Stack>
                </Flex>
                <Flex w={'50%'}>
                    <Heading w={'30%'} fontSize={'2xl'}>
                        네이버 웹툰
                        <Heading fontSize={'2xl'}>북마커</Heading>
                    </Heading>
                    <Stack w={'70%'}>
                        <Flex flexDir={'column'} gap={1}>
                            <Text> • React + CRXJS + TS</Text>
                            <Text> - 네이버 웹툰 페이지 북마크 기능 </Text>
                            <Link
                                color={'blue.600'}
                                href='https://chrome.google.com/webstore/detail/%EB%84%A4%EC%9D%B4%EB%B2%84-%EC%9B%B9%ED%88%B0-%EB%B6%81%EB%A7%88%ED%81%AC/cnfglfaobnkgkcnagfbaeilbpkcjcanh/related?hl=ko'
                            >
                                📌 네이버 웹툰 북마커 크롬스토어 페이지
                            </Link>
                        </Flex>
                    </Stack>
                </Flex>
            </Flex>
        </Flex>
    )
}
export default BurrencyBookmarker
