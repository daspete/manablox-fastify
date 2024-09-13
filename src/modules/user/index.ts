import { createModule } from "graphql-modules";
import { userResolvers } from "./user.resolver";
import { loadFilesSync } from "@graphql-tools/load-files";

export const userModule = createModule({
    id: 'user_module',
    dirname: __dirname,
    typeDefs: loadFilesSync('./**/*.graphql'),
    resolvers: userResolvers
})