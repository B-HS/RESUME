import { Box, Heading, Stack } from '@chakra-ui/react'
import Keywords from './joblist/keywords'
import Prosoft from './joblist/prosoft'
import Codinghub from './joblist/codinghub'

const Experiences = () => {
    return (
        <Box>
            <Heading fontSize={'3xl'} mb={2}>
                Experiences
            </Heading>
            <Stack p={2.5}>
                <Codinghub />
                <Prosoft />
                <Keywords />
            </Stack>
        </Box>
    )
}
export default Experiences
