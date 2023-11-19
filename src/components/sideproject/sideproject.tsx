import { Box, Heading, Stack } from '@chakra-ui/react'
import BoodBcms from './projects/boodbcms'
import BurrencyBookmarker from './projects/burrencyBookmarker'
import GumyonetBblog from './projects/gumyonetBblog'
const Sideproject = () => {
    return (
        <Box>
            <Heading fontSize={'3xl'} mb={2}>
                Side Project
            </Heading>
            <Stack gap={[2, 2, 2, 7, 7, 7]} p={2.5}>
                <GumyonetBblog />
                <BurrencyBookmarker />
                <BoodBcms />
            </Stack>
        </Box>
    )
}

export default Sideproject
