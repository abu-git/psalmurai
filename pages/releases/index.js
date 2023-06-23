import React from 'react'
import Head from 'next/head'
import Navigation from '@/components/Navigation'
import MiniLanding from '@/components/MiniLanding'
//import ReleasesContent from '@/components/ReleasesContent'
import Footer from '@/components/Footer'

import { motion } from 'framer-motion'

//import dbConnect from '@/lib/dbConnect'
//import PsalmuraiRelease from '@/models/PsalmuraiRelease'

function Releases({releases, page, count}){
    const lastPage = Math.ceil(count/30)

    //reverse releases array
    //const releasesSort = releases.reverse()

    return(
        <>

            <motion.main
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Navigation />
                <MiniLanding header="releases" />

            </motion.main>
        </>
    )
}

export default Releases