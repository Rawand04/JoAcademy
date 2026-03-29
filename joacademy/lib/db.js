// to establish connection with mongodb

import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://rawand_db_user:YHM7u6wCJxXV6Zl1@cluster0.fgx9ilw.mongodb.net/my-site?retryWrites=true&w=majority&authSource=admin",
  );
  return client;
}
