import React from 'react'


function RightVideo({title, content, embed}) {

    return (
        <div className='flex flex-col md:flex-row justify-center items-center py-16'>
            <div className='order-2 md:w-2/3'>
                <div className='mt-7 max-w-xl md:mx-auto'>
                    <iframe className="w-full aspect-video rounded-md" width="560" height="315" src={`https://www.youtube.com/embed/${embed}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                </div>
            </div>
            <main className='flex justify-end items-center md:w-1/3 md:mr-6'>
                <section>
                    <h3 className='font-extrabold text-right text-xl text-black mb-2'>{title}</h3>
                    <p className='text-right italic'>
                        {content}
                    </p>
                </section>
            </main>
        </div>
    )
}

export default RightVideo