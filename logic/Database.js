const { MongoClient, ServerApiVersion } = require('mongodb');
let { DB_URI } = require('./config.json');

class Database
{
    constructor()
    {
        this.initialize(DB_URI).then(r => (
            console.log("MongoDB Connected")
        ));
    }

    // Create the Client Variables and Connect to the database
    async initialize(uri)
    {
        this.client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        await this.client.connect();
    }

    async get(collection, query_string)
    {
        return await this.client.db("main").collection(collection).find(query_string).toArray();
    }

    async add(collection, data)
    {
        await this.client.db("main").collection(collection).insertOne(data);
    }

    async delete(collection, query_string)
    {
        await this.client.db("main").collection(collection).deleteOne(query_string);
    }

    async check(collection, query_string)
    {
        let data = await this.client.db("main").collection(collection).findOne(query_string);
        return !!data;

    }
}

module.exports = Database;
