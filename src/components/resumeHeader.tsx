import { Flex, Heading, Text } from '@chakra-ui/react'

const ResumeHeader = () => {
    return (
        <Flex alignItems={'baseline'} gap={3} justifyContent={'space-between'} pt={5} px={1}>
            <Heading fontSize={'3xl'}>변현석</Heading>
            <Text>HYUNSEOK BYUN | 95.07.01 | 일과 취미가 같은 개발자</Text>
        </Flex>
    )
}

export default ResumeHeader
