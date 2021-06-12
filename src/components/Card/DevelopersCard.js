import React from 'react'
import {useHistory } from 'react-router-dom' 
import {Box, Image, Text, Grid, GridItem} from '@chakra-ui/react'

function DevelopersCard() {

    const history = useHistory()

    return (
        <Grid
            templateColumns="85px 75%"
            minHeight="90px"
            position="relative"
            boxShadow="0px 3px 10px 0px #cfcfcf"
            borderRadius="5px"
            cursor="pointer"
            _hover={{shadow: "none", border:"1px solid #4f934a"}}
            onClick={e => history.push("/register")}
        >
            <GridItem>
                <Box position="relative">
                        <Image 
                            position="absolute"
                            top="50%"
                            left="50%"
                            transform="translate(-50%, 50%)"
                            zIndex="1"
                            loading="lazy"
                            src={require('assets/images/MWCAssets/Polygon.png')?.default}/>
                        <Image 
                            position="absolute"
                            h="20px"
                            w="20px"
                            left="50%"
                            ml="-10px"
                            top="50%"
                            mt="40px"
                            zIndex="2"
                            loading="lazy"
                            src={require('assets/images/MWCAssets/user.png')?.default}/>
                </Box>
            </GridItem>
            <GridItem p="10px">
                <Text fontSize="lg" fontWeight="semibold">Developers</Text>
                <Text color="gray" fontSize="sm">Cuenta personas para entrar en el mundo dev</Text>
            </GridItem>
            
        </Grid>
    )
}

export default DevelopersCard
