import Fastify from 'fastify';
import { carRoutes } from './cars.routes.js';

const fastify = Fastify({
  logger: true
});

fastify.register(carRoutes, { prefix: "/cars" });

try {
  await fastify.listen({ port: 8080 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
