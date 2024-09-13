import userService from "./user.service";
import type { UserInput } from "./user.model";

const resolvers = {
    Query: {
        async users() {
            return userService.find({});            
        },
    },

    Mutation: {
        async createUser(_: unknown, args: { user: UserInput }) {
            return userService.create(args.user);
        },

        async updateUser(_: unknown, args: { userId: string, user: UserInput }) {
            return userService.update(args.userId, args.user);
        },

        async deleteUser(_: unknown, args: { userId: string }) {
            return userService.delete(args.userId);
        },
    }
}
 
export const userResolvers = resolvers;