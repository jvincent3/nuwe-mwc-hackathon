import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import {SideContent} from 'components'

function Layout({children}) {
    return (
        <Grid templateColumns={{base:"100%",md:"repeat(2, 1fr)"}} height="100vh">
            <GridItem display={{base: "none", md: "initial"}}>
               <SideContent/>
            </GridItem>
            <GridItem>
                {children}
            </GridItem>
        </Grid>
    )
}

export default Layout
