import React from 'react'
import {Box,Flex, Text, Heading, Divider, Fade} from '@chakra-ui/react'
import {GoogleRegisterBtn} from 'components'
import RegisterForm from './RegisterForm'
import FadeInWhenVisible from 'layout/FadeInWhenVisible'

function RegisterPage() {
    return (
        <FadeInWhenVisible>
            <Box px={{base:"0",md:"50px"}}>
                <Box maxWidth="600px" mx="auto" px="10px">
                    <Box mb="5px">
                        <Heading fontSize={{base: "xl",md: "3xl"}}>Registra tu cuenta individual</Heading>
                    </Box>
                    <Box mb="30px">
                        <Text color="gray">Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información</Text>
                    </Box>
                    <Divider mb="10px"/>
                    <RegisterForm/>
                    <Flex justifyContent="space-evenly" my="20px">
                        <Box alignSelf="center" width="100%">
                            <Divider/>
                        </Box>
                        <Box width="30%">
                            <Text fontSize="xl" color="gray" textAlign="center">o</Text>
                        </Box>
                        <Box alignSelf="center" width="100%">
                            <Divider/>
                        </Box>
                    </Flex>
                    <GoogleRegisterBtn/>
                </Box>
            </Box>
        </FadeInWhenVisible>
    )
}

export default RegisterPage
