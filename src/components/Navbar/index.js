import React from 'react'
import {Flex, Box, Text, Link} from '@chakra-ui/react'

function Navbar() {
    return (
        <Flex justifyContent="flex-end">
            <Box p={{base: "20px 30px", md: "40px 50px"}}>
                <Text>Ya tienes cuenta? <Link>Inicia sesión</Link></Text>
            </Box>
        </Flex>
    )
}

export default Navbar
