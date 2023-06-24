import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Landing from '@/components/Landing'
import AfterLanding from '@/components/AfterLanding'
import Footer from '@/components/Footer'


import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Head>
          <title>Psalmurai</title>
          <meta name="description" content="Psalmurai | Official Website" />
          <meta property='og:description' content="Psalmurai is a Nigerian Hip Hop artist, Video Director and VFX Specialist" />
          <meta  property='og:image' itemProp="image" content='https://res.cloudinary.com/dbqn6vejg/image/upload/v1687577841/metapagesBG_znumck.jpg'/>
          <meta  property='og:image:secure_url' content='https://res.cloudinary.com/dbqn6vejg/image/upload/v1687577841/metapagesBG_znumck.jpg'/>
          <meta property="og:url" content="https://psalmurai.vercel.app" />
          <meta property="og:image:width" content="2024" />
          <meta property="og:image:height" content="1012" />
          <meta property="og:type" content="website" />

          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:title' content="Psalmurai | Official Website" />
          <meta property='twitter:image' content='https://res.cloudinary.com/dbqn6vejg/image/upload/v1687577841/metapagesBG_znumck.jpg' />
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
        transition={{ duration: 0.7 }}
      >
        <Navigation />
        <Landing />
        <AfterLanding />
        <Footer />
      </motion.main>
    </>
  )
}
