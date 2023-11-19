import { Flex, Heading, Stack, Text } from '@chakra-ui/react'
const DatabaseDevops = () => {
    return (
        <Flex gap={3} flexDir={'column'}>
            <Flex alignItems={'baseline'} gap={2.5}>
                <Flex w={'50%'}>
                    <Heading w={'30%'} fontSize={'2xl'}>
                        Database
                    </Heading>
                    <Stack w={'70%'}>
                        <Flex flexDir={'column'} gap={1}>
                            <Text> • MariaDB, MySQL, Oralce, SQLite</Text>
                        </Flex>
                    </Stack>
                </Flex>
                <Flex w={'50%'}>
                    <Heading w={'30%'} fontSize={'2xl'}>
                        DevOps
                    </Heading>
                    <Stack w={'70%'}>
                        <Flex flexDir={'column'} gap={1}>
                            <Text> • AWS Lightsail, Oracle cloud</Text>
                            <Text> • RHEL9(Rockey linux 9), CentOS7, Ubuntu</Text>
                            <Text> • Nginx, Docker, Wireguard </Text>
                        </Flex>
                    </Stack>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default DatabaseDevops
