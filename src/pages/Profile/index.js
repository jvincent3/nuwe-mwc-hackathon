import React from 'react'
import {Box, Text, Heading, Divider} from '@chakra-ui/react'
import ProfileForm from './ProfileForm'
import FadeInWhenVisible from 'layout/FadeInWhenVisible'

function Profile() {
    return (
        <FadeInWhenVisible>
            <Box px={{base:"0",md:"50px"}}>
                <Box maxWidth="600px" mx="auto" px="10px">
                    <Box mb="5px">
                        <Heading fontSize={{base: "xl",md: "3xl"}}>Completa tu perfil!</Heading>
                    </Box>
                    <Box mb="30px">
                        <Text color="gray">Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información</Text>
                    </Box>
                    <Divider mb="10px"/>
                    <ProfileForm/>
                </Box>
            </Box>
        </FadeInWhenVisible>
    )
}

export default Profile
