import React from 'react'
import {Box, Grid, GridItem } from '@chakra-ui/react'
import {SideContent, Navbar} from 'components'

function Layout({children}) {
    return (
        <Grid templateColumns={{base:"100%",lg:"repeat(2, 1fr)"}} height="100vh">
            <GridItem display={{base: "none", lg: "initial"}}>
               <SideContent/>
            </GridItem>
            <GridItem>
                <Navbar/>
                <Box py="40px">
                    {children}
                </Box>
            </GridItem>
        </Grid>
    )
}

export default Layout
