'use client'
import theme from '@/config/theme'
import { ChakraProvider, Container } from '@chakra-ui/react'
const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ChakraProvider theme={theme}>
            <Container maxW={'container.lg'}>{children}</Container>
        </ChakraProvider>
    )
}

export default Provider
