const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Got a GET request on `/`");
  res.send("Hello World!");
});

/**
 * Postman http://localhost:8080/sample
 * Body -> JSON
 * {
    "model": "S",
    "year": "2022",
    "brand": "Mercedes",
    "features": {
        "heatedSeats": false,
        "updates": true,
        "options": {
            "navigation": false
        }
    },
    "bought": ["mbux", "hyperscreen"]
}
 */
app.post("/sample", (req, res) => {
  console.log(req.body);
  console.log(req.body.features.heatedSeats);
  console.log(req.body.features.options.navigation);
  console.log(req.body.bought);
  res.send("Done");
});

app.listen(port, () => {
  console.log("Running...");
});
