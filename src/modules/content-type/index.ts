import { loadFilesSync } from "@graphql-tools/load-files";
import { createModule } from "graphql-modules";
import { contentTypeResolvers } from "./content-type.resolver";

export const contentTypeModule = createModule({
    id: 'content_type_module',
    dirname: __dirname,
    typeDefs: loadFilesSync('./**/*.graphql'),
    resolvers: contentTypeResolvers
})