import React from 'react'
import LocalVideo from './LocalVideo'
import RapUp2014 from './RapUp2014'
import RapUp2015 from './RapUp2015'
import AggressiveIntentionsVideo from './AggressiveIntentionsVideo'

function VideosContent() {
    return (
        <div className='bg-[#f4fdee] py-14 px-8 md:px-32 lg:px-72 md:mt-16 lg:mt-20 w-full'>
            <AggressiveIntentionsVideo />
            <RapUp2015 />
            <RapUp2014 />
            <LocalVideo />
        </div>
    )
}

export default VideosContent