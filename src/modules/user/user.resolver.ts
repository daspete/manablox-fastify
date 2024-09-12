import userService from "./user.service";

const resolvers = {
    Query: {
        async users() {
            return userService.find({});            
        },
    },
}
 
export const userResolvers = resolvers;