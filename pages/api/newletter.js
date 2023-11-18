import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    console.log("userEmail", userEmail);

    if (!userEmail) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }
    const client = await MongoClient.connect(
      "mongodb+srv://kietnguyen888:K335781t@cluster0.n7dn1pr.mongodb.net/newletter?retryWrites=true&w=majority"
    );
    const db = client.db();
    await db.collection("emails").insertOne({
      email: userEmail,
    });
    client.close();
    console.log("userEmail", userEmail);
    res.status(201).json({ message: "signed up" });
  }
}
export default handler;
