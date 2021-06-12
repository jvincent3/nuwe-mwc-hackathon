import React from 'react'
import {useHistory} from 'react-router-dom'
import {Flex, Box, Text, Link, Icon} from '@chakra-ui/react'
import {MdKeyboardArrowLeft} from 'react-icons/md'

function Navbar() {

    const history = useHistory()

    return (
        <Flex justifyContent="space-between" p={{base: "20px 30px", md: "20px 50px"}}>
            <Flex onClick={e => history.goBack()} cursor="pointer" transition=".5s" fontWeight="semibold" _hover={{transform: "scale(1.1)"}}>
                <Box alignSelf="center">
                    <Icon fontSize="3xl" as={MdKeyboardArrowLeft}/>
                </Box>
                <Box alignSelf="center">
                    <Text>Volver</Text>
                </Box>
            </Flex>
            <Box alignSelf="center">
                <Text>Ya tienes cuenta? <Link color="#4f934a" fontWeight="semibold">Inicia sesión</Link></Text>
            </Box>
        </Flex>
    )
}

export default Navbar
