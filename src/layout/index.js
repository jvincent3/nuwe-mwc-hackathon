import React from 'react'
import {Box, Grid, GridItem } from '@chakra-ui/react'
import {SideContent, Navbar} from 'components'

function Layout({children}) {
    return (
        <Grid templateColumns={{base:"100%",md:"repeat(2, 1fr)"}} height="100vh">
            <GridItem display={{base: "none", md: "initial"}}>
               <SideContent/>
            </GridItem>
            <GridItem>
                <Navbar/>
                <Box py="80px">
                    {children}
                </Box>
            </GridItem>
        </Grid>
    )
}

export default Layout
