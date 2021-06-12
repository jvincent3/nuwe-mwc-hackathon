import React from 'react'
import {Box, Text, Flex} from '@chakra-ui/react'
import Background from 'assets/images/MWCAssets/Background.png'

function SideContent() {
    return (
        <Box
            height="100%"
            backgroundImage={`url(${Background})`}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
        >
            <Flex height="100%" backgroundColor="#4f934aba">
                <Box alignSelf="center" maxWidth="500px" px="20px" mx="auto">
                    <Text color="white" fontSize="xl">Nuwe es la plataforma que convierte el desarrollo profesional, la búsqueda de trabajo y las conexiones de personas y empresas en un juego. Haciendo que puedas centrarte en lo que te gusta, programar, diseñar, crear, planear...</Text>
                </Box>
            </Flex>
        </Box>
        )
}

export default SideContent
