import React, {useState} from 'react'
import {useHistory } from 'react-router-dom' 
import {Box, Image, Text, Grid, GridItem, Icon} from '@chakra-ui/react'
import {AiOutlineUser} from 'react-icons/ai'
import {BiRightArrowAlt} from 'react-icons/bi'

function DevelopersCard() {

    const history = useHistory()
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
                        as={AiOutlineUser}
                    />
                </Box>
            </GridItem>
            <GridItem p="10px">
                <Text fontSize="lg" fontWeight="semibold">Developers</Text>
                <Text color="gray" fontSize="sm">Cuenta personas para entrar en el mundo dev</Text>
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

export default DevelopersCard
