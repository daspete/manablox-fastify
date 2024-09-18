import { Filter, FindOptions } from "mongodb";
import { MongoDbProvider } from "../../lib/database/mongodb.provider";
import { Content, ContentInput } from "./content.model";

export class ContentService {
    database: MongoDbProvider<Content>;

    constructor() {
        this.database = new MongoDbProvider<Content>('contents');
    }

    async find(filter: Filter<Partial<Content>>, options?: FindOptions) {
        await this.database.connect();
        const contents = await this.database.collection!.find(filter, options);
        return contents.toArray();
    }

    async findOne(filter: Filter<Partial<Content>>, options?: FindOptions) {
        await this.database.connect();
        return this.database.collection!.findOne(filter, options);
    }

    async create(content: ContentInput) {
        if (!content.contentId) {
            content.contentId = crypto.randomUUID();
        }
        if(content.fields) {
            content.fields = content.fields.map(field => {
                if(!field.contentFieldId) {
                    field.contentFieldId = crypto.randomUUID();
                }
                return field;
            });
        }
        if(content.slug) {
            content.permalink = content.slug.toLowerCase().replace(/ /g, '-');
        }

        await this.database.connect();
        const newContent = await this.database.collection!.insertOne(content);
        return this.findOne({ _id: newContent.insertedId });
    }

    async update(contentId: string, content: ContentInput) {
        if(content.fields) {
            content.fields = content.fields.map(field => {
                if(!field.contentFieldId) {
                    field.contentFieldId = crypto.randomUUID();
                }
                return field;
            });
        }
        await this.database.connect();
        await this.database.collection!.updateOne({ contentId }, { $set: content });
        return this.findOne({ contentId });
    }

    async delete(contentId: string) {
        await this.database.connect(); 
        await this.database.collection!.deleteOne({ contentId });
        return { contentId };
    }
}

const contentService = new ContentService()
export default contentService;