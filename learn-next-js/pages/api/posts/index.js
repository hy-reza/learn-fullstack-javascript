import db from '../../../libs/db'

export default async function handler(req, res){

    if(req.method !== 'GET') return res.status(405).end()

    const post = await db('posts')

    res.status(200).json({
        message :  'Post Data',
        data : post
    })

}