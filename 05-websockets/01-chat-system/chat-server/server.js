import Fastify from "fastify";
import fastifyWebsocket from "@fastify/websocket";

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyWebsocket);

fastify.get("/ping", (request, reply) => {
  reply.send({ ping: "pong" });
});

let connectedClients = new Set();

// In order to use websockets you need to register the routes as a fastify plugin
fastify.register((fastify) => {
  // On the `/chat` route we listen for the websocket connection
  fastify.get("/chat", { websocket: true }, (connection, req) => {

    // Once a connection is made we add the connection to the set of connected clients
    // and notify all clients about the new connection
    fastify.log.info(`Client connected`);
    connectedClients.add(connection);
    connectedClients.forEach((client) => {
      const response = { type: 'users', data: connectedClients.size};
      client.send(JSON.stringify(response));
    })

    connection.on("close", () => {
      connectedClients.delete(connection);
      fastify.log.info(`Client disconnected`);
    });

    /**
     * The message handler - All incoming messages from any websocket client arrive here
     */
    connection.on("message", (msg) => {
      fastify.log.info(`Message received: ${msg}`);

      try {
        const parsedMsg = JSON.parse(msg.toString());

        // In case of chat messages we send the message to all connected clients
        if (parsedMsg.type === 'chat') {
          connectedClients.forEach((client) => {
            const response = { type: 'chat', data: parsedMsg.data };
            client.send(JSON.stringify(response));
          });
        }
      } catch (error) {
        fastify.log.error(`Error parsing message: ${error}`);
        connection.send(JSON.stringify({ type: 'error', data: 'Invalid message' }));
      }
    });
  });
});

try {
  await fastify.listen({ port: 8080 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
