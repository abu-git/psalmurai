import React, { useState } from 'react'
import { useRouter } from "next/router"

const AddReleaseForm = ({ formId, releaseForm, forNewRelease = true }) => {
    const router = useRouter()
    const contentType = 'application/json'
    const [errors, setErrors] = useState({})
    const [message, setMessage] = useState('')

    const [form, setForm] = useState({
        title: releaseForm.title,
        description: releaseForm.description,
        content: releaseForm.content,
        tracklist: releaseForm.tracklist,
        releaseDate: releaseForm.releaseDate,
        spotify: releaseForm.spotify,
        youtube: releaseForm.youtube,
        itunes: releaseForm.itunes,
        tidal: releaseForm.tidal,
        bandcamp: releaseForm.bandcamp,
        audiomack: releaseForm.audiomack,
        img: releaseForm.img,
        slug: releaseForm.slug,
        metaImage: releaseForm.metaImage,
    })

    /* The POST method adds a new entry in the mongodb database */
    const postData = async (form) => {
        try{
            const res = await fetch('/api/release', {
                method: 'POST',
                headers: {
                    Accept: contentType,
                    'Content-Type': contentType,
                },
                body: JSON.stringify(form)
            })

            //Throw error with status code in case Fetch API req failed
            if(!res.ok){
                throw new Error(res.status)
            }

            router.push('/addPsalmuraiRelease')
        }catch(error){
            console.log(error)
            setMessage('Failed to add Release data')
        }
    }


    const handleChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name

        setForm({...form, [name]: value })
    }

    /* Makes sure blog info is filled */
    const formValidate = () => {
        let err = {}
        if(!form.title) err.title = 'Title is required'
        if(!form.description) err.description = 'Description is required'
        if(!form.content) err.content = 'Content is required'
        if(!form.tracklist) err.tracklist = 'Tracklist is required'
        if(!form.releaseDate) err.releaseDate = 'Release Date is required'
        if(!form.spotify) err.spotify = 'Spotify is required'
        if(!form.youtube) err.youtube = 'YouTube is required'
        if(!form.itunes) err.itunes = 'iTunes is required'
        if(!form.tidal) err.tidal = 'Tidal is required'
        if(!form.bandcamp) err.bandcamp = 'Bandcamp or none is required'
        if(!form.audiomack) err.audiomack = 'Audiomack or none is required'
        if(!form.img) err.img = 'Image is required'
        if(!form.slug) err.slug = 'Slug is required'
        if(!form.metaImage) err.metaImage = 'metaImage is required'
        return err
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const errs = formValidate()
        if(Object.keys(errs).length === 0){
            if(forNewRelease === true){
                postData(form)
            }
        }else{
            setErrors({ errs })
        }
    }

    return(
        <>
            <div className='py-7 px-24 text-black'>
                <h2 className='text-lg font-semibold text-center'>Add Release Data</h2>
                <form id={formId} onSubmit={handleSubmit} className='bg-white mx-5 my-6 py-4 px-3'>
                    <div className='flex py-2'>
                        <div className='w-full px-2'>
                            <label htmlFor="title" className='block mb-1'>title</label>
                            <input
                                type="text"
                                name="title"
                                value={form.title}
                                onChange={handleChange} 
                                className='w-full h-10 px-3 border border-black rounded-md text-black'
                                required
                            />
                            {/*errors?.title && (<p className='text-red-500 mt-1'>title cannot be empty</p>)*/}
                        </div>
                        <div className='w-full px-2'>
                            <label htmlFor="description" className='block mb-1'>description</label>
                            <input
                                type="text"
                                name="description"
                                value={form.description}
                                onChange={handleChange} 
                                className='w-full h-10 px-3 border border-black rounded-md text-black'
                                required
                            />
                            {/*errors?.title && (<p className='text-red-500 mt-1'>title cannot be empty</p>)*/}
                        </div>
                    </div>

                    <div className='w-full px-2 py-2'>
                        <label className='block mb-1'>content</label>
                        <textarea
                            type="text"
                            name="content"
                            value={form.content}
                            onChange={handleChange} 
                            className='w-full h-24 px-3 border border-black rounded-md'
                            required
                        >
                        </textarea>
                        {/*errors?.content && (<p className='text-red-500 mt-1'>content cannot be empty</p>)*/}
                    </div>

                    <div className='w-full px-2 py-2'>
                        <label className='block mb-1'>tracklist</label>
                        <input
                            type="text"
                            name="tracklist"
                            value={form.tracklist}
                            onChange={handleChange} 
                            className='w-full h-10 px-3 border border-black rounded-md'
                            required
                        />                       
                        {/*errors?.content && (<p className='text-red-500 mt-1'>content cannot be empty</p>)*/}
                    </div>

                    <div className='flex py-2'>
                        <div className='w-full px-2'>
                            <label htmlFor="title" className='block mb-1'>release date</label>
                            <input
                                type="text"
                                name="releaseDate"
                                value={form.releaseDate}
                                onChange={handleChange} 
                                className='w-full h-10 px-3 border border-black rounded-md text-black'
                                required
                            />
                            {/*errors?.title && (<p className='text-red-500 mt-1'>title cannot be empty</p>)*/}
                        </div>
                        <div className='w-full px-2'>
                            <label htmlFor="title" className='block mb-1'>Spotify</label>
                            <input
                                type="text"
                                name="spotify"
                                value={form.spotify}
                                onChange={handleChange} 
                                className='w-full h-10 px-3 border border-black rounded-md text-black'
                                required
                            />
                            {/*errors?.title && (<p className='text-red-500 mt-1'>title cannot be empty</p>)*/}
                        </div>
                    </div>

                    <div className='flex py-2'>
                        <div className='w-full px-2'>
                            <label htmlFor="title" className='block mb-1'>YouTube</label>
                            <input
                                type="text"
                                name="youtube"
                                value={form.youtube}
                                onChange={handleChange} 
                                className='w-full h-10 px-3 border border-black rounded-md text-black'
                                required
                            />
                            {/*errors?.title && (<p className='text-red-500 mt-1'>title cannot be empty</p>)*/}
                        </div>
                        <div className='w-full px-2'>
                            <label htmlFor="title" className='block mb-1'>iTunes</label>
                            <input
                                type="text"
                                name="itunes"
                                value={form.itunes}
                                onChange={handleChange} 
                                className='w-full h-10 px-3 border border-black rounded-md text-black'
                                required
                            />
                            {/*errors?.title && (<p className='text-red-500 mt-1'>title cannot be empty</p>)*/}
                        </div>
                    </div>

                    <div className='flex py-2'>
                        <div className='w-full px-2'>
                            <label htmlFor="title" className='block mb-1'>Tidal</label>
                            <input
                                type="text"
                                name="tidal"
                                value={form.tidal}
                                onChange={handleChange} 
                                className='w-full h-10 px-3 border border-black rounded-md text-black'
                                required
                            />
                            {/*errors?.title && (<p className='text-red-500 mt-1'>title cannot be empty</p>)*/}
                        </div>
                        <div className='w-full px-2'>
                            <label htmlFor="title" className='block mb-1'>Bandcamp</label>
                            <input
                                type="text"
                                name="bandcamp"
                                value={form.bandcamp}
                                onChange={handleChange} 
                                className='w-full h-10 px-3 border border-black rounded-md text-black'
                                required
                            />
                            {/*errors?.title && (<p className='text-red-500 mt-1'>title cannot be empty</p>)*/}
                        </div>
                    </div>

                    <div className='flex py-2'>
                        <div className='w-full px-2'>
                            <label htmlFor="title" className='block mb-1'>Audiomack</label>
                            <input
                                type="text"
                                name="audiomack"
                                value={form.audiomack}
                                onChange={handleChange} 
                                className='w-full h-10 px-3 border border-black rounded-md text-black'
                                required
                            />
                        </div>
                    </div>

                    <div className='flex py-2'>
                        <div className='w-full px-2'>
                            <label htmlFor="title" className='block mb-1'>Image</label>
                            <input
                                type="text"
                                name="img"
                                value={form.img}
                                onChange={handleChange} 
                                className='w-full h-10 px-3 border border-black rounded-md text-black'
                                required
                            />
                            {/*errors?.title && (<p className='text-red-500 mt-1'>title cannot be empty</p>)*/}
                        </div>
                        <div className='w-full px-2'>
                            <label htmlFor="title" className='block mb-1'>Slug</label>
                            <input
                                type="text"
                                name="slug"
                                value={form.slug}
                                onChange={handleChange} 
                                className='w-full h-10 px-3 border border-black rounded-md text-black'
                                required
                            />
                            {/*errors?.title && (<p className='text-red-500 mt-1'>title cannot be empty</p>)*/}
                        </div>
                    </div>

                    <div className='w-full px-2 py-2'>
                        <label className='block mb-1'>metaImage</label>
                        <input
                            type="text"
                            name="metaImage"
                            value={form.metaImage}
                            onChange={handleChange} 
                            className='w-full h-10 px-3 border border-black rounded-md'
                            required
                        />
                        
                        {/*errors?.content && (<p className='text-red-500 mt-1'>content cannot be empty</p>)*/}
                    </div>
                    <button className='h-12 mt-4 w-full text-white transition-colors duration-150 bg-amber-700 rounded-lg focus:shadow-outline hover:bg-amber-800'>Add to Database</button>
                </form>
            </div>
        </>
    )
}

export default AddReleaseForm