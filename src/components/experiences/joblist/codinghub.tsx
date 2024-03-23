import { Box, Flex, HStack, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
const Codinghub = () => {
    return (
        <Stack divider={<StackDivider />}>
            <Flex gap={3} flexDir={'column'}>
                <HStack alignItems={'baseline'} gap={2.5} flexWrap={'wrap'}>
                    <Heading fontSize={'2xl'}>코딩허브</Heading>
                    <Heading fontSize={'md'}>Frontend developer</Heading>
                    <Text fontSize={'sm'}>2024. 03 ~ </Text>
                </HStack>
            </Flex>
            <HStack p={3.5} flexWrap={'wrap'} justifyContent={'space-between'}>
                <Box>
                    <Text fontWeight={'bold'}>서비스 개발 참여</Text>
                    <Text color={'gray.500'}>2024.03 ~</Text>
                </Box>
                <Box w={['75%', '100%', '75%', '75%', '75%']}>
                    <Stack>
                        <Flex flexDir={'column'} gap={1}>
                            <Text> • 진행 중 </Text>
                        </Flex>
                    </Stack>
                </Box>
            </HStack>
        </Stack>
    )
}

export default Codinghub
