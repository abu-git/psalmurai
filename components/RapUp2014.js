import React from 'react'

function RapUp2014() {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center py-16'>
            <div className='order-2 md:order-1 md:w-2/3'>
                <div className='mt-7 max-w-xl md:mx-auto'>
                    <iframe className="w-full aspect-video rounded-md" width="560" height="315" src="https://www.youtube.com/embed/Cm5cxAvEsbM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                </div>
            </div>
            <main className='order-1 md:order-2 flex justify-start items-center md:w-1/3 md:ml-6'>
                <section>
                    <h3 className='font-extrabold text-left text-xl text-black mb-2'>2014 Naija Rap Up</h3>
                    <p className='text-left italic'>
                        The Video for the &apos;2014 Naija Rap Up&apos;. Recorded at the dojo and beat produced by XYZ of Str8 Buttah. Courtesy Block 20 Media & Barrack Boy Entertainment.
                    </p>
                </section>
            </main>
        </div>
    )
}

export default RapUp2014