// Import the framework and instantiate it
import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

// Declare a route
fastify.get("/", async function handler(request, reply) {
  return { hello: "world" };
});

fastify.post("/", async function handler(request, reply) {
  return { hello: "POST" };
});

fastify.get("/test", async function handler(request, reply) {
  reply.code(500);
  return { error: 'Something went wrong'};
});

// Run the server!
try {
  await fastify.listen({ port: 8080 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
