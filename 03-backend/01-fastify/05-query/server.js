import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

// A list of sample beers
const beers = [
  {
    name: "Nattheimer Spezial",
    taste: "Good",
    brand: "Nattheimer",
    amount: 6,
    rating: 4,
    id: 1,
  },
  {
    name: "Goldochsen Kellerbier",
    taste: "Super",
    brand: "Goldochsen",
    amount: 0,
    rating: 1,
    id: 2,
  },
];

fastify.get("/beer", async function handler(request, reply) {
  const { taste } = request.query;
  if (taste) {
    const filteredBeers = beers.filter((beer) => beer.taste.toLowerCase().includes(taste.toLowerCase()));
    return { beers: filteredBeers };
  }
  return { beers };
});

try {
  await fastify.listen({ port: 8080 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
