import { extendTheme } from '@chakra-ui/react'

const hoverStyle = {
    _hover: {
        transform: 'scale(1.01)',
        opacity: 0.5,
        textDecoration: 'none',
    },
    _active: {
        opacity: 0.5,
    },
}

const fonts = {
    heading: '"M PLUS Rounded 1c", sans-serif',
    body: '"M PLUS Rounded 1c", sans-serif',
}

const components = {
    Link: {
        baseStyle: () => hoverStyle,
    },
    Button: {
        baseStyle: (props: any) => ({
            color: props.colorMode === 'dark' ? 'black' : 'white',
            ...hoverStyle,
        }),
    },
}
const styles = {
    global: (props: any) => ({
        body: {
            bg: props.colorMode === 'dark' ? 'black' : 'white',
        },
    }),
}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const theme = extendTheme({
    fonts,
    components,
    styles,
    config,
})

export default theme
