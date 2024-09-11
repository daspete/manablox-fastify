import { createModule, gql } from "graphql-modules";

export const userModule = createModule({
    id: 'user_module',
    dirname: __dirname,
    typeDefs: gql`
        type Query {
            hello: String
        }
    `,
    resolvers: {
        Query: {
            hello: () => "world"
        }
    }
})