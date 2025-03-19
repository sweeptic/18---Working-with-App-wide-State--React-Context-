import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  const client = new MongoClient(
    'mongodb+srv://mongouser123:Hardfloor888888@cluster0.5mx6g.mongodb.net/events?retryWrites=true&w=majority&appName=Cluster0'
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection) {
  const db = client.db();
  const documents = await db.collection('comments').find().sort({ _id: -1 }).toArray();
  return documents;
}
