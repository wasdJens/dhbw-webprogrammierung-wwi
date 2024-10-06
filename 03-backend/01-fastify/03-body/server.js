import Fastify from "fastify";
import userRoutes from "./user.routes.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(userRoutes, { prefix: "/user" });

try {
  await fastify.listen({ port: 8080 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
