import { ApolloServer, BaseContext } from "@apollo/server";
import { fastifyApolloDrainPlugin, fastifyApolloHandler } from "@as-integrations/fastify";
import fastify from "fastify";
import { graphqlApplicaton } from "./modules/bootstrap";

const server = fastify();

const apolloServer = new ApolloServer<BaseContext>({
    plugins: [fastifyApolloDrainPlugin(server)],
    gateway: {
        async load() {
            return {
                executor: graphqlApplicaton.createApolloExecutor()
            }
        },

        onSchemaLoadOrUpdate(callback) {
            callback({ apiSchema: graphqlApplicaton.schema } as any);
            return () => {};
        },

        async stop() {}
    },
})

server.get("/", async (request, reply) => {
    return { hello: "world" };
});

const start = async () => {
    try {
        await apolloServer.start();
        
        // await server.register(fastifyApollo(apolloServer));
        server.route({ 
            url: "/graphql",
            method: ['POST', 'OPTIONS'],
            handler: fastifyApolloHandler(apolloServer),
        })

        await server.listen({
            port: 3000,
            host: '0.0.0.0'
        });

        console.log(`Server listening on port 3000`);
    }catch(err){
        console.error(err);
    }
}

start();