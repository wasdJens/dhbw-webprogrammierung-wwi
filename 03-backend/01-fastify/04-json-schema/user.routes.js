let user = null;

const userCreateOptions = {
  schema: {
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
      },
      required: ["name"],
    },
    response: {
      200: {
        type: "object",
        properties: {
          name: { type: "string" },
          id: { type: "integer" },
        },
      },
    },
  },
};

async function userRoutes(fastify, options) {
  fastify.get("/", async (request, reply) => {
    if (user === null) {
      reply.code(404).send();
    } else {
      return user;
    }
  });

  fastify.post("/", userCreateOptions, async (request, reply) => {
    const body = request.body;
    user = { name: body.name, id: 0 };
    reply.code(201);
    return user;
  });

  fastify.put("/", async (request, reply) => {
    user = { name: "Nicht mehr Jens", id: 0 };
    return user;
  });

  fastify.delete("/", async (request, reply) => {
    user = null;
    reply.code(200).send();
  });
}

export default userRoutes;
