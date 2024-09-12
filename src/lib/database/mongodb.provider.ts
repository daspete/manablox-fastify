import { Collection, Db, MongoClient } from "mongodb";

export class MongoDbProvider<T extends Record<string, any>> {
    isConnected: boolean = false;
    collectionName: string;
    client: MongoClient;
    db: Db | null = null;
    collection: Collection<T> | null = null;

    constructor(collectionName: string) {
        this.collectionName = collectionName;
        this.client = new MongoClient('mongodb://db:27017');
        
        this.connect();
    }

    async connect() {
        if(this.isConnected) return;

        try {
            await this.client.connect();
            this.isConnected = true;
            
            this.db = this.client.db('manablox');
            this.collection = this.db.collection<T>(this.collectionName);
        }catch(err){
            console.error(err);
            throw new Error('mongodb.connection error');
        }
    }

}