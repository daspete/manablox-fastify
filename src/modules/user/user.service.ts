import { Filter, FindOptions } from "mongodb";
import { MongoDbProvider } from "../../lib/database/mongodb.provider";
import { User, UserInput } from "./user.model";

export class UserService {
    database: MongoDbProvider<User>;

    constructor() {
        this.database = new MongoDbProvider<User>('users');
    }

    async find(filter: Filter<Partial<User>>, options?: FindOptions) {
        await this.database.connect();
        const users = await this.database.collection!.find(filter, options);
        return users.toArray();
    }

    async findOne(filter: Filter<Partial<User>>, options?: FindOptions) {
        await this.database.connect();
        return this.database.collection!.findOne(filter, options);
    }

    async create(user: UserInput) {
        if (!user.userId) {
            user.userId = crypto.randomUUID();
        }

        await this.database.connect();
        const newUser = await this.database.collection!.insertOne(user);
        return this.findOne({ _id: newUser.insertedId });
    }

    async update(userId: string, user: UserInput) {
        await this.database.connect();
        await this.database.collection!.updateOne({ userId }, { $set: user });
        return this.findOne({ userId });
    }

    async delete(userId: string) {
        await this.database.connect();
        await this.database.collection!.deleteOne({ userId });
        return { userId };
    }

}

const userService = new UserService();
export default userService;