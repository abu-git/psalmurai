import React from 'react'
import Link from 'next/link'
import AfterLandingItem from './AfterLandingItem'

function AfterLanding() {
    return (
        <div className='bg-[#f4fdee] px-12 py-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 justify-items-center'>
                <AfterLandingItem 
                    link="/releases/unknown-error" 
                    image="unknownerror.jpg"
                    spotify="https://open.spotify.com/album/5AbiyDBaKjdO3wYBSBlLA2?si=VB4aF18ES5iQFdTyZN6rEA" 
                    itunes="https://music.apple.com/za/album/unknown-error/1577544696"
                    tidal="https://tidal.com/browse/album/191699547"
                    youtube="https://youtube.com/playlist?list=PLD4542IY9xdRzDSDoZebYvteKivjMMqnM"
                    title="Unknown Error"
                />

                <AfterLandingItem 
                    link="/releases/here-we-go-with-x-blaze" 
                    image="herewego.jpg"
                    spotify="https://open.spotify.com/album/6JGOgdYFFl4ouI0F9Jce65?si=bVK37oKJT7mK0jaCx2d1Ww" 
                    itunes="https://music.apple.com/za/album/here-we-go-feat-xblaze-single/1531287216"
                    tidal="https://tidal.com/browse/album/154863173"
                    audiomack="https://audiomack.com/psalmurai/song/here-we-go"
                    youtube="https://youtube.com/playlist?list=OLAK5uy_koK1HnKpc9n4iIi8XhL3YD5AR6ZvROJKY"
                    title="Here We Go"
                />
                
                <AfterLandingItem 
                    link="/releases/once-upon-a-quarantine" 
                    image="quarantine.jpg"
                    spotify="https://open.spotify.com/album/5qkDCv0jPa8VhlJx5QZfpo?si=xSL50eHgSraAqae6McXu3w" 
                    itunes="https://music.apple.com/za/album/once-upon-a-quarantine/1519866674"
                    tidal="https://tidal.com/browse/album/146100383"
                    audiomack="https://audiomack.com/psalmurai/album/once-upon-a-quarantine-1"
                    youtube="https://youtube.com/playlist?list=OLAK5uy_k0ER0tAo3J0nEx3XMOuOgVqEHTUqPpe5g"
                    title="Once Upon a Quarantine"
                />
                
            </div>

            <div className='mt-11'>
            <div className='flex justify-center'>
                    <Link href="/releases" passHref>
                        <button className='button'>
                            More Releases
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AfterLanding