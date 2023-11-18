import { MongoClient } from "mongodb";

async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://kietnguyen888:K335781t@cluster0.n7dn1pr.mongodb.net/events?retryWrites=true&w=majority"
  );
  const eventId = req.query.eventId;
  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      !name.trim() === "" ||
      !text ||
      !text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newCmt = {
      email,
      name,
      text,
      eventId,
    };
    const db = client.db();
    const result = await db.collection("comments").insertOne(newCmt);
    console.log("result", result);
    newCmt.id = result.insertedId;
    res.status(201).json({ message: "cmt added", comment: newCmt });
  }
  if (req.method === "GET") {
    const db = client.db();
    const documents = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();
      // sort -1 => sort descending 
    res.status(200).json({ comments: documents });
  }
  client.close();
}

export default handler;
