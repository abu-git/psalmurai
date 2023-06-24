import React from 'react'
import Head from 'next/head'
import Navigation from '@/components/Navigation'
import MiniLanding from '@/components/MiniLanding'
import ContactContent from '@/components/ContactContent'
import Footer from '@/components/Footer'

function Contact() {
    return (
        <>
            <Head>
                <title>Psalmurai | Contact</title>
                <meta name="description" content="Psalmurai | Official Website" />
                <meta property='og:description' content="Leave a message" />
                <meta  property='og:image' itemProp="image" content='https://res.cloudinary.com/dbqn6vejg/image/upload/v1687630239/metaContact_uaebej.jpg'/>
                <meta  property='og:image:secure_url' content='https://res.cloudinary.com/dbqn6vejg/image/upload/v1687630239/metaContact_uaebej.jpg'/>
                <meta property="og:url" content="https://psalmurai.vercel.app/contact" />
                <meta property="og:image:width" content="2024" />
                <meta property="og:image:height" content="1012" />
                <meta property="og:type" content="website" />

                <meta property='twitter:card' content='summary_large_image' />
                <meta property='twitter:title' content="Psalmurai | Contact" />
                <meta property='twitter:image' content='https://res.cloudinary.com/dbqn6vejg/image/upload/v1687630239/metaContact_uaebej.jpg' />
                <meta name="twitter:creator" content="@reachmhp"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navigation />
                <MiniLanding header="contact" />
                <ContactContent />
            </main>
        </>
    )
}

export default Contact