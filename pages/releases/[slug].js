import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import MiniLanding from '@/components/MiniLanding'
import SlugNavigation from '@/components/SlugNavigation'
import Footer from '@/components/Footer'

import { motion } from 'framer-motion'

import { v2 as cloudinary } from 'cloudinary'

import dbConnect from '@/lib/dbConnect'
import PsalmuraiRelease from '@/models/PsalmuraiRelease'

function TheRelease({release, tracklist, ogImageUrl}) {
    return(
        <>
            <Head>
                <title>Psalmurai | Releases</title>
                <meta name="description" content="Psalmurai | Official Website" />
                <meta property='og:description' content={`Psalmurai | ${release.title}`} />
                <meta  property='og:image' itemProp="image" content={ogImageUrl} />
                <meta  property='og:image:secure_url' content={ogImageUrl} />
                <meta property="og:url" content={`https://psalmurai.vercel.app/releases/${release.slug}`} />
                <meta property="og:image:width" content="2024" />
                <meta property="og:image:height" content="1012" />
                <meta property="og:type" content="website" />

                <meta property='twitter:card' content='summary_large_image' />
                <meta property='twitter:title' content={`Psalmurai | ${release.title}`} />
                <meta property='twitter:image' content={ogImageUrl} />
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
                transition={{ duration: 0.95 }}
            >
                <SlugNavigation />
                <MiniLanding header={release.title} />

                <section className='bg-[#d6e4e4] py-14 px-8 md:px-32 lg:px-72 md:mt-16 lg:mt-20 w-full'>
                    <main className='grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center content-center'>
                        <div className='w-full flex flex-col items-center lg:justify-start lg:items-center'>
                            <div className=''>
                                <Image src={`/${release.img}`} width={300} height={300} alt={release.title} />
                            </div>
                            <h4 className='text-md md:text-xl text-center py-5'>{release.description}</h4>
                            <p className='text-sm italic md:text-lg text-justify md:mx-12 lg:mx-16'>{release.content}</p>

                            <main className='flex justify-center items-center mt-8'>
                                    
                                {release.spotify !== "none" && (<a href={release.spotify} target='_blank' rel='noreferrer'>
                                    <svg className='w-7 h-7 fill-gray-600  hover:fill-[#3e9e43]' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Spotify</title><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                                </a>)}
                                    
                                {release.itunes !== "none" && (<a href={release.itunes} target='_blank' rel='noreferrer'>
                                    <svg className='w-7 h-7 ml-4 fill-gray-600 hover:fill-[#ecafc8]' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Apple Music</title><path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 011.038-2.022c.323-.16.67-.25 1.018-.324.378-.082.758-.153 1.134-.24.274-.063.457-.23.51-.516a.904.904 0 00.02-.193c0-1.815 0-3.63-.002-5.443a.725.725 0 00-.026-.185c-.04-.15-.15-.243-.304-.234-.16.01-.318.035-.475.066-.76.15-1.52.303-2.28.456l-2.325.47-1.374.278c-.016.003-.032.01-.048.013-.277.077-.377.203-.39.49-.002.042 0 .086 0 .13-.002 2.602 0 5.204-.003 7.805 0 .42-.047.836-.215 1.227-.278.64-.77 1.04-1.434 1.233-.35.1-.71.16-1.075.172-.96.036-1.755-.6-1.92-1.544-.14-.812.23-1.685 1.154-2.075.357-.15.73-.232 1.108-.31.287-.06.575-.116.86-.177.383-.083.583-.323.6-.714v-.15c0-2.96 0-5.922.002-8.882 0-.123.013-.25.042-.37.07-.285.273-.448.546-.518.255-.066.515-.112.774-.165.733-.15 1.466-.296 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.403.22-.043.442-.088.663-.106.31-.025.523.17.554.482.008.073.012.148.012.223.002 1.91.002 3.822 0 5.732z"/></svg>
                                </a>)}

                                {release.tidal !== "none" && (<a href={release.tidal} target='_blank' rel='noreferrer'>
                                    <svg className='w-7 h-7 fill-gray-600 ml-4 hover:fill-black' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tidal</title><path d="M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996 4.004 12l4.004-4.004L12.012 12l-4.004 4.004 4.004 4.004 4.004-4.004L12.012 12l4.004-4.004-4.004-4.004zM16.042 7.996l3.979-3.979L24 7.996l-3.979 3.979z"/></svg>
                                </a>)}   

                                {release.bandcamp !== "none" && (<a href={release.bandcamp} target='_blank' rel='noreferrer'>
                                    <svg className='w-7 h-7 fill-gray-600 ml-4 hover:fill-[#0c8c9c]' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bandcamp</title><path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z"/></svg>
                                </a>)}


                                {release.audiomack  !== "none" && (<a href={release.audiomack} target='_blank' rel='noreferrer'>
                                    <svg className='w-7 h-7 hover:fill-yellow-500 fill-gray-600 ml-4' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Audiomack</title><path d="M.331 11.378s.5418-.089.765.1439c.2234.2332.077.7156-.2195.7237-.2965.01-.5705.063-.765-.1439-.1946-.2066-.1424-.6218.2195-.7237m5.881 3.2925c-.0522.01-.1075-.018-.164-.059-.3884-.5413-.5287-2.3923-.707-2.5025-.185-.1144-.8545 1.0255-2.1862.903-.5569-.051-1.1236-.4121-1.4573-.662.031-.4206.0364-1.4027.8659-1.0833.5038.1939 1.3667.7266 2.1245-.23.8378-1.0579 1.2999-.7506 1.577-.5206.2771.23.0925 1.4259.5058 1.0916.4133-.3343 2.082-2.4103 2.082-2.4103s1.292-1.303 1.4898.067c.1979 1.3698 1.0403 2.8877 1.2635 2.8445.2234-.043 2.8223-5.3253 3.1945-5.666.3722-.3409 1.6252-.2961 1.5657.5781-.0596.8742-.1871 6.308-.1871 6.308s-.147 1.5311.0924.7128c.0992-.3392.206-.6453.3392-1.0024.6414-2.0534 1.734-5.5613 2.2784-7.3688.1252-.4325.233-.8037.3166-1.0891l.0001-.0008a3.5925 3.5925 0 0 1 .0973-.3305c.0455-.1532.0763-.2546.0858-.2813.0243-.068.0925-.1192.1884-.157.0962-.061.1995-.064.3165-.067.3021-.027.6907.012 1.0401.1119.1018 0 .2125.037.3172.1118v.0001s.0063 0 .0151.01c.0023 0 .0048 0 .0073.01.0219.015.0573.045.0983.095.0012 0 .0025 0 .004.01.017.021.0341.045.0515.073.1952.2863.315.814.1948 1.7498-.2996 2.3354-.5316 7.1397-.5316 7.1397s-.0461.2298.4353-.782c.0167-.035.0383-.066.058-.098.026-.017.0552-.042.0913-.085.2974-.3546 1.0968-.5629 1.6512-.5586.2336.028.4293.087.5462.1609.2188.333.0897 1.562.0897 1.562-.4612.043-1.3403.2908-1.6519.3366-.3118.046-.7852 2.0699-1.4433 1.8629-.6581-.2069-2.1246-1.1268-2.1246-1.2533 0-.1102.1152-1.4546.1453-1.8016.0022-.024.004-.046.0058-.068a.152.152 0 0 1 .0014-.014l-.0002.0003c.0213-.2733.0023-.3927-.1239-.1199-.1086.2346-.581 1.7359-1.1078 3.3709-.0556.1429-1.0511 3.1558-1.1818 3.5231-.156.4261-.287.7523-.3776.921-.1378.1867-.3234.3036-.5826.2252-.6465-.1954-1.4654-1.0889-1.473-1.3106-.0155-1.2503.0608-7.973-.2423-7.4127-.311.5744-2.73 4.5608-2.73 4.5608-.0405.01-.0705.01-.1062.01-.1712-.019-.4366-.074-.51-.2384-.004-.01-.0094-.018-.0129-.028-.0035-.01-.0075-.022-.0135-.04-.0329-.1097-.0463-.2289-.0753-.3265-.1082-.3652-.2813-.8886-.463-1.421-.2784-.9079-.5654-1.8366-.6127-1.9391-.0923-.2007-.2268-.116-.3475-.0002-.54.458-1.6868 2.4793-2.7225 2.5898"/></svg>
                                </a>)}
                                

                                {release.youtube  !== "none" && (<a href={release.youtube} target='_blank' rel='noreferrer'>
                                    <svg className='w-7 h-7 fill-gray-600 ml-4 hover:fill-rose-600' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                                </a>)}
                            </main>
                        </div>

                        <div className='w-full mt-7 lg:mt-0 grid grid-cols-1 justify-items-center content-center'>
                            <h3 className='text-2xl text-center lg:text-left pb-5 lg:pl-9'>tracklist</h3>
                            <ul className='flex flex-col items-center lg:items-center'>
                                {tracklist.map((track) => 
                                    <li className="italic font-extralight text-center text-sm py-1 lg:pl-9" key={track}>{track.replaceAll("comma", ",")}</li>
                                )}
                            </ul>
                        </div>
                    </main>
                </section>

                <Footer />
            </motion.main>
        </>
    )
}

export async function getServerSideProps({ params: {slug}}){
    await dbConnect()

    const result = await PsalmuraiRelease.findOne({'slug': slug})

    const release = result.toObject()
    release._id = release._id.toString()
    release.date = release.date.toString()

    const tracklist = release.tracklist.split(",")

    cloudinary.config({
        cloud_name: 'dbqn6vejg'
    })

    const cloudinaryUrl = cloudinary.url('metaBG_hukufg', {
        width: 1012,
        height: 506,
        transformation: [
          {
            fetch_format: 'auto',
            quality: 'auto'
          },
          {
            overlay: {
              url: result.metaImage
            }
          },
          {
            flags: 'layer_apply',
            width: 260,
            height: 280,
            gravity: 'north_west',
            x: 400,
            //y: 42
            y: 150
          }
        ]
    })

    return {
        props: {
            release: release,
            tracklist: tracklist,
            ogImageUrl: cloudinaryUrl
        }
    }
}

export default TheRelease