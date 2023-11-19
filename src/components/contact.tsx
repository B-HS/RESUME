import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'

const Contact = () => {
    return (
        <Flex gap={10} w={'full'} mt={3}>
            <Image src={'/profile.png'} maxW={200} alt='logo' />
            <Box w={'full'}>
                <Heading fontSize={'2xl'}>Contact</Heading>
                <Flex>
                    <Text w={'25%'}>Email.</Text>
                    <Link w={'75%'} href='mailto://hbyun.tistory.com'>
                        hs@gumyo.net
                    </Link>
                </Flex>
                <Flex>
                    <Text w={'25%'}>Phone.</Text>
                    <Text> 010-7538-2613</Text>
                </Flex>

                <Heading fontSize={'2xl'} mt={3}>
                    Sites
                </Heading>
                <Flex>
                    <Text w={'25%'}>Blog.</Text>
                    <Link color={'blue.600'} w={'75%'} href='https://hbyun.tistory.com'>
                        https://hbyun.tistory.com
                    </Link>
                </Flex>
                <Flex>
                    <Text w={'25%'}>Portfolio.</Text>
                    <Link color={'blue.600'} w={'75%'} href='https://gumyo.net/portfolio'>
                        https://gumyo.net/portfolio
                    </Link>
                </Flex>
                <Flex>
                    <Text w={'25%'}>Github.</Text>
                    <Link color={'blue.600'} w={'75%'} href='https://github.com/B-HS'>
                        https://github.com/B-HS
                    </Link>
                </Flex>
            </Box>
        </Flex>
    )
}
export default Contact
