import db from "./database.js";
import express, { urlencoded, json } from "express";
const app = express();
const port = 8080;

app.use(urlencoded({ extended: true }));
app.use(json());

async function getBeers() {
  try {
    const beers = await db.any("SELECT * FROM beer");
    return beers;
  } catch (e) {
    console.error(e);
    throw e;
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
  try {
    const beers = await getBeers();
    res.status(200).json(beers);
  } catch (e) {
    res.sendStatus(500);
  }
});

app.post("/beers", async (req, res) => {
  if (!req.body.hasOwnProperty("name")) {
    resolveBadRequest(res, 'Missing "name" property');
  }
  if (!req.body.hasOwnProperty("taste")) {
    resolveBadRequest(res, 'Missing "taste" property');
  }
  if (await createBeer(req.body.name, req.body.taste)) {
    res.sendStatus(201);
  } else {
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log("Running...");
});


function resolveBadRequest(res, message) {
  res.statusCode = 400;
  res.send(message);
  res.end();
  return;
}
