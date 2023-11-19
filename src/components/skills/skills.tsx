import { Box, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import DatabaseDevops from './list/databasedevops'
import FrontBack from './list/frontback'

const Skills = () => {
    return (
        <Box>
            <Heading gap={2} display={'flex'} alignItems={'center'} fontSize={'3xl'} mb={2}>
                Skills
                <Text color={'gray.500'} fontSize={'sm'}>
                    - 거쳐온 기술들 및 숙련도 순으로 나열됩니다
                </Text>
            </Heading>
            <Stack gap={7} p={2.5}>
                <Stack divider={<StackDivider />}>
                    <FrontBack />
                    <DatabaseDevops />
                </Stack>
            </Stack>
        </Box>
    )
}
export default Skills
