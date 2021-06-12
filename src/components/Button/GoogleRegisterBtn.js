import React from 'react'
import {Box, Flex, Icon, Text} from '@chakra-ui/react'
import {FcGoogle} from 'react-icons/fc'

function GoogleRegisterBtn() {
    return (
        <Flex 
            boxShadow="0px 3px 10px 0px #cfcfcf"
            borderRadius="5px"
            p="20px"
            transition=".5s"
            _hover={{transform: "scale(1.05)"}}
            cursor="pointer"
        >
            <Flex width="fit-content" mx="auto">
                <Box>
                    <Icon fontSize="30px" as={FcGoogle} />
                </Box>
                <Box ml="20px">
                    <Text fontWeight="semibold" fontSize="xl">Registráte con Google</Text>
                </Box>
            </Flex>
        </Flex>
    )
}

export default GoogleRegisterBtn
