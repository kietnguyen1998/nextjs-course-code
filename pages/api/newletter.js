function handler(req, res) {
  if (req.method === "POST") {
    console.log('req', req.body)
    const userEmail = req.body.email;
    console.log('userEmail', userEmail)
    if (!userEmail) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }
    res.status(201).json({ message: "signed up" });
  }
}
export default handler;
