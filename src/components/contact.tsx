import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'

const Contact = () => {
    return (
        <Flex gap={10} w={'full'} mt={3} flexWrap={'wrap'} alignItems={'center'}>
            <Image src={'/profile.png'} w={['100%', '50%', '50%', '25%', '25%', '25%']} alt='logo' />
            <Box w={['100%', '70%', '70%', '70%', '70%', '70%']}>
                <Heading fontSize={'2xl'}>Contact</Heading>
                <Flex flexWrap={'wrap'}>
                    <Text w={'27.5%'}>Email.</Text>
                    <Link w={'70%'} href='mailto://hbyun.tistory.com'>
                        hs@gumyo.net
                    </Link>
                </Flex>
                <Flex flexWrap={'wrap'}>
                    <Text w={'27.5%'}>Phone.</Text>
                    <Text> 010-7538-2613</Text>
                </Flex>

                <Heading fontSize={'2xl'} mt={3}>
                    Sites
                </Heading>
                <Flex flexWrap={'wrap'}>
                    <Text w={'27.5%'}>Blog.</Text>
                    <Link color={'blue.600'} w={'72.5%'} href='https://hbyun.tistory.com'>
                        https://hbyun.tistory.com
                    </Link>
                </Flex>
                <Flex flexWrap={'wrap'}>
                    <Text w={'27.5%'}>Portfolio.</Text>
                    <Link color={'blue.600'} w={'72.5%'} href='https://gumyo.net/portfolio'>
                        https://gumyo.net/portfolio
                    </Link>
                </Flex>
                <Flex flexWrap={'wrap'}>
                    <Text w={'27.5%'}>Github.</Text>
                    <Link color={'blue.600'} w={'72.5%'} href='https://github.com/B-HS'>
                        https://github.com/B-HS
                    </Link>
                </Flex>
            </Box>
        </Flex>
    )
}
export default Contact
