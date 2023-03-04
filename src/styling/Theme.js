import { extendTheme } from '@chakra-ui/react';
// import Text from './Text.js';
import { Box, Text, Button } from '@chakra-ui/react'

const Theme = extendTheme({
    components: {
        Text, Box, Button
    }
})

export default Theme;