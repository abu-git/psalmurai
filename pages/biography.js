import React from 'react'
import Head from 'next/head'
import Navigation from '@/components/Navigation'
import MiniLanding from '@/components/MiniLanding'
//import VideosContent from '@/components/VideosContent'
import Footer from '@/components/Footer'

import { motion } from 'framer-motion'

function Biography() {
    return (
        <>

            <motion.main
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Navigation />
                <MiniLanding header="biography" />
            </motion.main>
        </>
    )
}

export default Biography