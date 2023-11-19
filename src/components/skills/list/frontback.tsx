import { Flex, Heading, Stack, Text } from '@chakra-ui/react'

const FrontBack = () => {
    return (
        <Flex gap={3} flexDir={'column'}>
            <Flex alignItems={'baseline'} gap={2.5}>
                <Flex w={'50%'}>
                    <Heading w={'30%'} fontSize={'2xl'}>
                        Frontend
                    </Heading>
                    <Stack w={'70%'}>
                        <Flex flexDir={'column'} gap={1}>
                            <Text> • Typescript, Javascript</Text>
                            <Text> • Vuejs, Reactjs, Svelte</Text>
                            <Text> • Nextjs, Electron, Svelte Kit, CRXJS</Text>
                        </Flex>
                    </Stack>
                </Flex>
                <Flex w={'50%'}>
                    <Heading w={'30%'} fontSize={'2xl'}>
                        Backend
                    </Heading>
                    <Stack w={'70%'}>
                        <Flex flexDir={'column'} gap={1}>
                            <Text> • Java, Typescript</Text>
                            <Text> • Spring boot, Express, Nestjs</Text>
                            <Text> • MyBatis, Prisma, JPA, TypeORM</Text>
                        </Flex>
                    </Stack>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default FrontBack
