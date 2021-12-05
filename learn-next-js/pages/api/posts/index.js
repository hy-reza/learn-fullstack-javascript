import db from "../../../libs/db";
import authorization from "../../../middlewares/authorization";

export default async function handler(req, res) {
  //verifikasi method
  if (req.method !== "GET") return res.status(405).end();

  const auth = await authorization(req, res)

  //verifikasi token

  const post = await db("posts");

  res.status(200).json({
    message: "Post Data",
    data: post,
  });
}
