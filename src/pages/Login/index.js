import React from 'react'
import {Box, Text, Heading, Link} from '@chakra-ui/react'
import LoginForm from './LoginForm'
import FadeInWhenVisible from 'layout/FadeInWhenVisible'

function Home() {
    return (
        <FadeInWhenVisible>
            <Box pt="100px">
                <Box maxWidth="600px" mx="auto" px="10px">
                    <Box mb="20px">
                        <Heading fontSize={{base: "xl", md:"3xl"}}>¡Bienvenido Nuwer!</Heading>
                    </Box>
                    <Box mb="30px">
                        <Text color="gray">Vamos a seguir con la aventura</Text>
                    </Box>
                    <Box mb="20px">
                        <LoginForm/>
                    </Box>
                    <Text textAlign="center" fontSize="lg" color="gray">¿Aún no eres miembro? <Link color="#4f934a" fontWeight="semibold" href="/register">Registrate</Link></Text>
                </Box>
            </Box>
        </FadeInWhenVisible>
    )
}

export default Home
