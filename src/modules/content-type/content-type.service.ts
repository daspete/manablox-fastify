import { Filter, FindOptions } from "mongodb";
import { MongoDbProvider } from "../../lib/database/mongodb.provider";
import { ContentType, ContentTypeInput } from "./content-type.model";

export class ContentTypeService {
    database: MongoDbProvider<ContentType>;

    constructor() {
        this.database = new MongoDbProvider<ContentType>('contentTypes');    
    }
    
    async find(filter: Filter<Partial<ContentType>>, options?: FindOptions) {
        await this.database.connect();
        const contentTypes = await this.database.collection!.find(filter, options);
        return contentTypes.toArray();
    }

    async findOne(filter: Filter<Partial<ContentType>>, options?: FindOptions) {
        await this.database.connect();
        return this.database.collection!.findOne(filter, options);
    }

    async create(contentType: ContentTypeInput) {
        if (!contentType.contentTypeId) {
            contentType.contentTypeId = crypto.randomUUID();
        }
        if(contentType.fields) {
            contentType.fields = contentType.fields.map(field => {
                if(!field.contentTypeFieldId) {
                    field.contentTypeFieldId = crypto.randomUUID();
                }
                return field;
            });
        }

        await this.database.connect();
        const newContentType = await this.database.collection!.insertOne(contentType);
        return this.findOne({ _id: newContentType.insertedId });
    }

    async update(contentTypeId: string, contentType: ContentTypeInput) {
        if(contentType.fields) {
            contentType.fields = contentType.fields.map(field => {
                if(!field.contentTypeFieldId) {
                    field.contentTypeFieldId = crypto.randomUUID();
                }
                return field;
            });
        }
        await this.database.connect();
        await this.database.collection!.updateOne({ contentTypeId }, { $set: contentType });
        return this.findOne({ contentTypeId });
    }

    async delete(contentTypeId: string) {
        await this.database.connect(); 
        await this.database.collection!.deleteOne({ contentTypeId });
        return { contentTypeId };
    }
}

const contentTypeService = new ContentTypeService()
export default contentTypeService