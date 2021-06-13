import React, {useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'

function FadeInWhenVisible({children}) {
    const controls = useAnimation()

    useEffect(() => {
        controls.start("visible")
    },[controls])

    return (
        <motion.div
            animate={controls}
            initial="hidden"
            variants={{
                visible: {opacity: 1, y: 0},
                hidden: {opacity: 1, y: 30}
            }}
            transition={{duration: .7}}
        >
            {children}
        </motion.div>
    )
}

export default FadeInWhenVisible
