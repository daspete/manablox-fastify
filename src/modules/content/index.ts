import { loadFilesSync } from "@graphql-tools/load-files";
import { createModule } from "graphql-modules";
import { contentResolvers } from "./content.resolver";

export const contentModule = createModule({
    id: 'content_module',
    dirname: __dirname,
    typeDefs: loadFilesSync('./**/*.graphql'),
    resolvers: contentResolvers
})