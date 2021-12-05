import db from '../../../libs/db'
import bcrypt from 'bcryptjs'

export default async function handler(req, res){
    if(req.method !== 'POST') return res.status(405).end()

    const {email, password} = req.body

    const salt = bcrypt.genSaltSync(10)
    const passwordHash = bcrypt.hashSync(password, salt)


    const dataUser = await db('users').insert({email : email, password : passwordHash})
    const createdUser = await db('users').where('id', dataUser).first()

    res.status(200).json({
        message : 'User allready registered',  
        dataUser : createdUser
    })


}