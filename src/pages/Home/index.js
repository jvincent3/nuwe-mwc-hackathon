import React from 'react'
import {Box, Text, Heading, Link} from '@chakra-ui/react'
import {DevelopersCard, BusinessCard} from 'components/Card'

function Home() {
    return (
        <Box pt="100px">
            <Box maxWidth="400px" mx="auto" px="10px">
                <Box mb="20px">
                    <Heading fontSize={{base: "xl", md:"3xl"}}>¡Únete a la comunidad!</Heading>
                </Box>
                <Box mb="30px">
                    <Text color="gray">Para empezar, dinos que cuenta te gustaría abrir</Text>
                </Box>
                <Box mb="30px">
                    <DevelopersCard/>
                </Box>
                <Box mb="30px">
                    <BusinessCard/>
                </Box>
                <Text display={{base: "inital", lg:"none"}} textAlign="center" fontSize="lg" color="gray">¿Ya tienes cuenta? <Link color="#4f934a" fontWeight="semibold" href="/login">Inicia sesión</Link></Text>
            </Box>
        </Box>
    )
}

export default Home
