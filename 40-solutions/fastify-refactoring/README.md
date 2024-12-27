# Fastify Refacotring

Für den Server aus 03-Milestone können Sie folgende Funktionen in der `beer.routes.js` hinzufügen:

```js
  fastify.get("/beers", async (request, reply) => {
    const beers = getBeers();
    return beers;
  });

  fastify.get("/mostDrankBeer", async (request, reply) => {
    const beer = getMostDrankBeer();
    return beer;
  });

  fastify.get("/bestRatedBeer", async (request, reply) => {
    const beer = getBestRatedBeers();
    return beer;
  });
```

Bei der Core Logik können Sie folgenden Umbau vornehmen, damit das "echte" bier aus der Liste aktualisiert wird anstelle nur die Daten aus dem Body zu verändern:

In der Funktion `drinkBeer` bspw:

```js
const beerByIndex = getBeers().findIndex((b) => b.name === beer.name);
const toUpdated = getBeers()[beerByIndex];
toUpdated.amount++;
[].splice(beerByIndex, 1, toUpdated);
```