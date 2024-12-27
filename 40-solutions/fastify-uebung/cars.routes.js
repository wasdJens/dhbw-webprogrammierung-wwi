const cars = [];

let id = 0;

export function carRoutes(fastify, options) {
  fastify.get('/', async function handler(request, reply) {
    return cars;
  })

  fastify.post('/', async function handler(request, reply) {
    const body = request.body;
    const car = {
      id: id++,
      name: body.name,
      color: body.color,
    }
    cars.push(car);
    reply.status(201);
    return car;
  })

  fastify.put('/', async function handler(request, reply) {
    return { 'car': null }
  })

  fastify.delete('/', async function handler(request, reply) {
    const body = request.body;
    const idToDelete = body.id;
    const carIndex = cars.findIndex((car) => car.id === idToDelete);
    cars.splice(carIndex, 1);
    return { 'status': 'done'}
  })
}