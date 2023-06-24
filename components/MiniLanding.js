import React from 'react'
import Image from 'next/image'

function MiniLanding({header}) {
    return (
        <div className='w-full'>
            <div>
                <Image 
                    src="/miniLanding.jpg"
                    alt="Psalmurai landing img"
                    width={2200}
                    height={600}
                    className='object-cover brightness-50'
                />

                <h2 className='text-center text-2xl md:text-5xl font-bold text-white brightness-200 -mt-11 md:-mt-[7.5rem] lg:-mt-[8.7rem]'>{header}</h2>
            </div>
        </div>
    )
}

export default MiniLanding