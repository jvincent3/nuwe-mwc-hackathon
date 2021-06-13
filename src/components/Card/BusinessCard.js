import React, {useState} from 'react'
import {Box, Image, Text, Grid, GridItem, Icon} from '@chakra-ui/react'
import {FiBriefcase} from 'react-icons/fi'
import {BiRightArrowAlt} from 'react-icons/bi'

function BusinessCard() {

    const [isHovered, setIsHovered] = useState(false)

    return (
        <Grid
            onMouseEnter={e => setIsHovered(true)}
            onMouseLeave={e => setIsHovered(false)}
            templateColumns={{base: "85px 75%",lg:"85px 65% 30px"}}
            minHeight="90px"
            position="relative"
            boxShadow="0px 3px 10px 0px #cfcfcf"
            borderRadius="5px"
            cursor="pointer"
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
                            src={require(isHovered ? 'assets/images/MWCAssets/Polygon.png': 'assets/images/MWCAssets/Polygon-3.png')?.default}
                        />
                        <Icon 
                            position="absolute"
                            h="20px"
                            w="20px"
                            left="50%"
                            ml="-10px"
                            top="50%"
                            mt="40px"
                            zIndex="2"
                            loading="lazy"
                            color={isHovered ? "white": "#4f934a"}
                            as={FiBriefcase}
                        />
                </Box>
            </GridItem>
            <GridItem p="10px" alignSelf="center">
                <Text fontSize="lg" fontWeight="semibold">Business</Text>
                <Text color="gray" fontSize="sm">Tienes o perteneces a una compañia</Text>
            </GridItem>
            <GridItem display={{base: "none", lg: "initial"}} alignSelf="center">
                <Icon
                    color={isHovered ? "#4f934a" : "white"}
                    fontSize="25px"
                    as={BiRightArrowAlt}
                />
            </GridItem>
        </Grid>
    )
}

export default BusinessCard
