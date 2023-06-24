import React from 'react'
import Head from 'next/head'
import Navigation from '@/components/Navigation'
import MiniLanding from '@/components/MiniLanding'
import ReleasesContent from '@/components/ReleasesContent'
import Footer from '@/components/Footer'

import { motion } from 'framer-motion'


import dbConnect from '@/lib/dbConnect'
import PsalmuraiRelease from '@/models/PsalmuraiRelease'

function Releases({releases, page, count}){
    const lastPage = Math.ceil(count/30)

    //reverse releases array
    const releasesSort = releases.reverse()

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
                <ReleasesContent releases={releasesSort} />
                <Footer />

            </motion.main>
        </>
    )
}

export default Releases

export async function getServerSideProps({ query: {page = 1}}) {
    await dbConnect()

    const options = {
        page: page,
        limit: 30
    }

    const result = await PsalmuraiRelease.paginate({}, options)
    //console.log(result)
    const releases = result.docs.map((doc) => {
        const release = doc.toObject()
        release._id = release._id.toString()
        release.date = release.date.toString()
        return release
    })

    return {
        props: {
            releases: releases,
            page: parseInt(result.page),
            count: parseInt(result.totalDocs)
        },
    }
}