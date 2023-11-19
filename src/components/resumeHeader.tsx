import { Flex, HStack, Heading, StackDivider, Text } from '@chakra-ui/react'

const ResumeHeader = () => {
    return (
        <Flex alignItems={'center'} gap={3} justifyContent={'space-between'} pt={5} px={1} flexWrap={'wrap'}>
            <Heading fontSize={'3xl'}>변현석</Heading>
            <HStack divider={<StackDivider />} gap={3.5} wrap={'wrap'}>
                <Text>HYUNSEOK BYUN</Text>
                <Text>95.07.01 </Text>
                <Text>일과 취미가 같은 개발자</Text>
            </HStack>
        </Flex>
    )
}

export default ResumeHeader
