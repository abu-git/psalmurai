import React from 'react'
import Link from 'next/link'
import AfterLandingItem from './AfterLandingItem'

function AfterLanding() {
    return (
        <div className='bg-[#f4fdee] px-12 py-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 justify-items-center'>
                <AfterLandingItem 
                    link="none" 
                    image="unknownerror.jpg"
                    spotify="https://open.spotify.com/album/5AbiyDBaKjdO3wYBSBlLA2?si=KiWU2_DzQ5qlvPjEfBQ6vw" 
                    itunes="https://music.apple.com/za/album/enter-the-double-dragon-ii/1668929087"
                    tidal="https://tidal.com/browse/album/191699547"
                    youtube="https://youtube.com/playlist?list=PLD4542IY9xdRzDSDoZebYvteKivjMMqnM"
                    title="Unknown Error"
                />

                <AfterLandingItem 
                    link="none" 
                    image="herewego.jpg"
                    spotify="https://open.spotify.com/album/5AbiyDBaKjdO3wYBSBlLA2?si=KiWU2_DzQ5qlvPjEfBQ6vw" 
                    itunes="https://music.apple.com/za/album/enter-the-double-dragon-ii/1668929087"
                    tidal="https://tidal.com/browse/album/191699547"
                    youtube="https://youtube.com/playlist?list=PLD4542IY9xdRzDSDoZebYvteKivjMMqnM"
                    title="Here We Go"
                />
                
                <AfterLandingItem 
                    link="none" 
                    image="quarantine.jpg"
                    spotify="https://open.spotify.com/album/5AbiyDBaKjdO3wYBSBlLA2?si=KiWU2_DzQ5qlvPjEfBQ6vw" 
                    itunes="https://music.apple.com/za/album/enter-the-double-dragon-ii/1668929087"
                    tidal="https://tidal.com/browse/album/191699547"
                    youtube="https://youtube.com/playlist?list=PLD4542IY9xdRzDSDoZebYvteKivjMMqnM"
                    title="Once Upon a Quarantine"
                />
                
            </div>
        </div>
    )
}

export default AfterLanding