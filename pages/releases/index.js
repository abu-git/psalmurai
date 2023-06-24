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
            <Head>
                <title>Psalmurai | Releases</title>
                <meta name="description" content="Psalmurai | Official Website" />
                <meta property='og:description' content="Releases from Psalmurai" />
                <meta  property='og:image' itemProp="image" content='https://res.cloudinary.com/dbqn6vejg/image/upload/v1687577841/metaReleases_jl5eyi.jpg'/>
                <meta  property='og:image:secure_url' content='https://res.cloudinary.com/dbqn6vejg/image/upload/v1687577841/metaReleases_jl5eyi.jpg'/>
                <meta property="og:url" content="https://psalmurai.vercel.app/releases" />
                <meta property="og:image:width" content="2024" />
                <meta property="og:image:height" content="1012" />
                <meta property="og:type" content="website" />

                <meta property='twitter:card' content='summary_large_image' />
                <meta property='twitter:title' content="Psalmurai | Official Website" />
                <meta property='twitter:image' content='https://res.cloudinary.com/dbqn6vejg/image/upload/v1687577841/metaReleases_jl5eyi.jpg' />
                <meta name="twitter:creator" content="@reachmhp"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
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