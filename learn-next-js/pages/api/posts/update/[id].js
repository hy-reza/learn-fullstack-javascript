import db from "../../../../libs/db";
import authorization from "../../../../middlewares/authorization"

export default async function handler(req, res) {
  if (req.method !== "PUT") return req.status(405).end();

  const auth = await authorization(req, res)
  
  const { id } = req.query;
  const { title, content } = req.body;

  const update = await db("posts")
    .where({ id: id })
    .update({ title: title, content: content });
  const data = await db("posts").where("id", id).first();

  res.status(200).json({
    message: "Post is updated successfully",
    data,
  });
}
