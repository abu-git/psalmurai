import React from 'react'
import ImageGallery from 'react-image-gallery'

function BioContent() {
    //slide array
    const images = [
        {
            original: "/slider1.jpg",
        },
        {
            original: "/slider2.png",
        },
        {
            original: "/slider3.jpg",
        }
    ]


    return (
        <div className='bg-[#f4fdee] py-14 px-8 md:px-32 lg:px-72 md:mt-16 lg:mt-20 w-full'>
            <p className='text-lg pt-7 pb-7 text-black text-justify'>
                Psalmurai is a Nigerian Hip Hop artist sometimes referred to as &apos;Psalmurai Pseven&apos;. He is known for his conscious lyrics as well as his prowess in Video Editing and Directing. He made his break in as part of a rap group known as the &quot;Kalifate&quot;.
            </p>
            <p className='text-lg pt-7 pb-7 text-black text-justify'>
                Psalmurai released his album, &quot;Unknown Error,&quot; in 2021. The album was a critical and commercial success, and it helped to establish Psalmurai as one of the most relevant artists in Nigerian Hip Hop. He has been consistently releasing music and had collaborations with top Nigerian artists like Chizzy Tha Don, Teck Zilla, Bionic the Soul King, Rheymophoebus, XYZ and EX&apos;O just to mention a few.
            </p>

            <p className='text-lg pt-7 pb-7 text-black text-justify'>
                A talented rapper that creates thought provoking music; he has continued making music and creating high level music videos. 
            </p>

            <div className='py-8 lg:px-60'>
                <ImageGallery
                    items={images}
                    infinite={true}
                    showBullets={false}
                    showPlayButton={false}
                    showFullscreenButton={true}
                    autoPlay={true}
                    showNav={true}
                    className="w-screen" 
                />
            </div>
        </div>
    )
}

export default BioContent