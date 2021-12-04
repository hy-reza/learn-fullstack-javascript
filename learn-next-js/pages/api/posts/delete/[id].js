import db from '../../../../libs/db'

export default async function handler(req, res){
    if(req.method !== 'DELETE') return res.status(405).end()

    const {id} = req.query
    const deleteData = await db('posts'). where({id : id}).del()

    res.status(200).json({
        message : 'Post deleted successfully'
    })
}