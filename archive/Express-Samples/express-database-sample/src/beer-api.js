const { db } = require("./database");
const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

async function getBeers() {
  try {
    const beers = await db.any("SELECT * FROM beer");
    return beers;
  } catch (e) {
    console.error(e);
  }
}

async function createBeer(name, taste) {
  try {
    await db.none({
      name: "create-beer",
      text: "INSERT INTO beer (name, taste) VALUES($1, $2)",
      values: [name, taste],
    });
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

app.get('/beers', async (req, res) => {
  const beers = await getBeers();
  if (beers.length === 0) {
    resolveNotFound(res, `No beers found 🥺`);
  } else {
    res.statusCode = 200;
    res.json(beers);
    res.end();
  }
});

app.post("/beer", async (req, res) => {
  if (!req.body.hasOwnProperty("name")) {
    resolveBadRequest(res, 'Missing "name" property');
  }
  if (!req.body.hasOwnProperty("taste")) {
    resolveBadRequest(res, 'Missing "taste" property');
  }
  if (await createBeer(req.body.name, req.body.taste)) {
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log("Running...");
});

function resolveNotFound(res, message) {
  res.statusCode = 404;
  res.send(message);
  res.end();
  return;
}

function resolveBadRequest(res, message) {
  res.statusCode = 400;
  res.send(message);
  res.end();
  return;
}
