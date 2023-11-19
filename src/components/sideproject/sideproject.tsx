import { Box, Heading, Stack, StackDivider } from '@chakra-ui/react'
import BoodBcms from './projects/boodbcms'
import BurrencyBookmarker from './projects/burrencyBookmarker'
import GumyonetBblog from './projects/gumyonetBblog'
const Sideproject = () => {
    return (
        <Box>
            <Heading fontSize={'3xl'} mb={2}>
                Side Project
            </Heading>
            <Stack gap={7} p={2.5}>
                <Stack divider={<StackDivider />}>
                    <GumyonetBblog />
                    <BurrencyBookmarker />
                    <BoodBcms />
                </Stack>
            </Stack>
        </Box>
    )
}

export default Sideproject
