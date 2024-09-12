import { Filter, FindOptions } from "mongodb";
import { MongoDbProvider } from "../../lib/database/mongodb.provider";
import { User } from "./user.model";

export class UserService {
    database: MongoDbProvider<User>;

    constructor() {
        this.database = new MongoDbProvider<User>('users');
    }

    async find(filter: Filter<User>, options?: FindOptions) {
        await this.database.connect();
        const users = await this.database.collection!.find(filter, options);
        return users.toArray();
    }

}

const userService = new UserService();
export default userService;