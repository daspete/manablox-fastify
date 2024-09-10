import fastify from "fastify";

const server = fastify();

server.get("/", async (request, reply) => {
    return { hello: "world" };
});

const start = async () => {
    try {
        await server.listen({
            port: 3000,
        });
        
    }catch(err){
        console.error(err);
    }
}

start();