import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Landing from '@/components/Landing'
import AfterLanding from '@/components/AfterLanding'
import Footer from '@/components/Footer'



export default function Home() {
  return (
    <>
      <Head>
        <title>Psalmurai</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <main>
        <Navigation />
        <Landing />
        <AfterLanding />
        <Footer />
      </main>
    </>
  )
}
