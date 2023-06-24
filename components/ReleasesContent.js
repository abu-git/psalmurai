import React from 'react'
import ReleaseItem from './ReleaseItem'

function ReleasesContent({releases}) {
    return (
        <div className='bg-[#f4fdee] py-14 px-8 md:px-32 lg:px-72 md:mt-16 lg:mt-20 w-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center content-center gap-12 md:gap-5 my-7'>
                {releases.map((release) => {
                return <ReleaseItem release={release} key={release._id} />
                })}
            </div>
        </div>
    )
}

export default ReleasesContent