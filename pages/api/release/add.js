import dbConnect from '../../../lib/dbConnect'
import PsalmuraiRelease from "../../../models/PsalmuraiRelease"

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function addRelease(req, res){

    try{
        const { title, description, content, tracklist, releaseDate, spotify, youtube, itunes, tidal, bandcamp, audiomack, img, slug, metaImage } = req.body
        console.log('Connecting to MongoDB...')
        await connectMongo()
        console.log('Connected to MongoDB...')

        console.log('Creating Document')
        const release = await PsalmuraiRelease.create(req.body)
        console.log('Created Document')

        res.json({release})
    }catch(error){
        console.log(error)
        res.json({error})
    }
}