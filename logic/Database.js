
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DB_URI;

class Database
{
    async constructor()
    {
        this.client = this.initialize(uri);
    }

    async initialize(uri)
    {
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        await client.connect();
        return client;
    }


}