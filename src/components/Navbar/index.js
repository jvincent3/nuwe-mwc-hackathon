import React from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {Flex, Box, Text, Link, Icon} from '@chakra-ui/react'
import {MdKeyboardArrowLeft} from 'react-icons/md'

function Navbar() {

    const history = useHistory()
    const location = useLocation();
    const locationName = location.pathname.replace(/[^a-zA-Z]/gi, '')

    const pageData = {
        "register": {
            "step": "STEP 01/03",
            "desc": "Personal info."
        },
        "profile": {
            "step": "STEP 02/03",
            "desc": "Localización"
        },
        "verify": {
            "step": "STEP 03/03",
            "desc": "Verificación por tarjeta."
        },
    }
    
    if (location.pathname === "/") {
        return (
            <Flex display={{base: "none", lg: "flex"}} justifyContent="flex-end" p={{base: "20px 30px", md: "20px 50px"}}>
                <Box alignSelf="center">
                    <Text>Ya tienes cuenta? <Link color="#4f934a" fontWeight="semibold">Inicia sesión</Link></Text>
                </Box>
            </Flex>
        )
    }

    return (
        <Flex justifyContent="space-between" p={{base: "20px 30px", md: "20px 50px"}}>
            <Flex onClick={e => history.goBack()} cursor="pointer" transition=".5s" fontWeight="semibold" color="gray" _hover={{transform: "scale(1.1)"}}>
                <Box alignSelf="center">
                    <Icon fontSize="3xl" as={MdKeyboardArrowLeft}/>
                </Box>
                <Box alignSelf="center">
                    <Text>Volver</Text>
                </Box>
            </Flex>
            <Box alignSelf="center">
                {pageData[locationName] &&
                <>
                    <Text textAlign="right" color="gray" textTransform="uppercase">{pageData[locationName].step}</Text>
                    <Text textAlign="right" color="gray" fontWeight="semibold">{pageData[locationName].desc}</Text>
                </>
                }
            </Box>
        </Flex>
    )
}

export default Navbar
