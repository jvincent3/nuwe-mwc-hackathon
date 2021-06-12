import React from 'react'
import {Box, Image, Text, Grid, GridItem} from '@chakra-ui/react'

function BusinessCard() {
    return (
        <Grid
            templateColumns="85px 75%"
            minHeight="90px"
            position="relative"
            boxShadow="0px 3px 10px 0px #cfcfcf"
            borderRadius="5px"
            _hover={{shadow: "none", border:"1px solid #4f934a"}}
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
                            src={require('assets/images/MWCAssets/Polygon-3.png')?.default}/>
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
                            src={require('assets/images/MWCAssets/briefcase.png')?.default}/>
                </Box>
            </GridItem>
            <GridItem p="10px" alignSelf="center">
                <Text fontSize="lg" fontWeight="semibold">Business</Text>
                <Text color="gray" fontSize="sm">Tienes o perteneces a una compañia</Text>
            </GridItem>
            
        </Grid>
    )
}

export default BusinessCard
