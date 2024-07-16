import { Box, Heading, Stack } from '@chakra-ui/react'
import BCrawlerBcms from './projects/bcrawlerBcms'
import BIcon from './projects/bicon'
import BurrencyBookmarker from './projects/burrencyBookmarker'
import GumyonetBealrt from './projects/gumyonetBealert'
const Sideproject = () => {
    return (
        <Box>
            <Heading fontSize={'3xl'} mb={2}>
                Side Project
            </Heading>
            <Stack gap={[2, 2, 2, 7, 7, 7]} p={2.5}>
                <GumyonetBealrt />
                <BurrencyBookmarker />
                <BCrawlerBcms />
                <BIcon />
            </Stack>
        </Box>
    )
}

export default Sideproject
