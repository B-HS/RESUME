import { Flex, HStack, Heading, Stack, Text } from '@chakra-ui/react'

const Stacks = () => {
    const data = [
        { name: 'Frontend', children: ['Typescript, Javascript', 'Reactjs, Vuejs, Svelte', 'Nextjs, Electron, Svelte Kit, CRXJS'] },
        { name: 'Backend', children: ['Typescript, Java', 'Hono, Spring boot, Express, Nestjs', 'Prisma, MyBatis, JPA, TypeORM'] },
        { name: 'Database', children: ['MariaDB, SQLite, MySQL, Oralce'] },
        { name: 'DevOps', children: ['AWS Lightsail', 'RHEL9(Rockey linux 9), Ubuntu', 'Nginx, Docker, Wireguard'] },
    ]

    return (
        <HStack alignItems={'baseline'} gap={2.5} flexFlow={'wrap'}>
            {data.map((ele) => (
                <HStack key={ele.name} w={['100%', '100%', '100%', '49%', '49%', '49%']} flexWrap={'wrap'}>
                    <Heading w={['100%', '30%', '30%', '30%', '30%']} fontSize={'2xl'}>
                        {ele.name}
                    </Heading>
                    <Stack>
                        <Flex flexDir={'column'} gap={1}>
                            {ele.children.map((chil) => (
                                <Text key={chil}> • {chil}</Text>
                            ))}
                        </Flex>
                    </Stack>
                </HStack>
            ))}
        </HStack>
    )
}

export default Stacks
