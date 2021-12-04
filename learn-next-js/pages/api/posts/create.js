import db from "../../../libs/db";

export default async function Post(req, res) {
  if(req.method !== 'POST') return res.status(405).end()

  const {title, content} = req.body
  
  const create = await db("posts").insert({
    title: title,
    content: content
  });

  console.log(create)
  const createdData = await db('posts').where('id', create).first()
  res.status(200).json({
    message: "Post created successfully",
    data : createdData
  });
}
