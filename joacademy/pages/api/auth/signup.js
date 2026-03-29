import { connectToDatabase } from "../../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;
  const { name, phone_number, type } = data;
  const client = await connectToDatabase();
  const db = client.db();

  const existedUser = await db.collection("users").findOne({
    phone_number,
  });

  if (existedUser) {
    res.status(422).json({ message: "User already exists" });
    return;
  }

  const result = await db.collection("users").insertOne({
    name,
    phone_number,
    type
  });

  res.status(201).json({ message: `Created ${type} user!` });
}
