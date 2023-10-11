import express from "express";

const beerRouteController = express.Router();

const beers = [];
let currentIndex = 0;

/**
 * Custom middleware to append the self and parent structure to each response as hypermedia property.
 */
beerRouteController.use((req, res, next) => {
  const links = [
    {
      rel: "self",
      href: `http://${req.headers.host}${req.originalUrl}`,
      action: req.method,
    },
    {
      rel: "parent",
      href: `http://${req.headers.host}${req.originalUrl}`,
      action: "GET",
    },
  ];
  res.hypermedia = links;
  next();
});

beerRouteController.get("/", (req, res) => {
  const apiResponse = {
    title: "Sample Beer API",
    version: "1.0",
    links: [
      {
        rel: "self",
        href: `http://${req.headers.host}/api/v1/`,
        action: "GET",
      },
      {
        rel: "collection",
        href: `http://${req.headers.host}/api/v1/beers`,
        action: "GET",
      },
      {
        rel: "create",
        href: `http://${req.headers.host}/api/v1/beers`,
        action: "POST",
      },
    ],
  };
  res.json(apiResponse);
});

/**
 * API Controller to get a list of all beers
 */
beerRouteController.get("/beers", (req, res) => {
  const beerResponse = {
    items: beers,
    links: [...res.hypermedia],
  };
  res.json(beerResponse);
});

/**
 * API Controller to create a new beer.
 */
beerRouteController.post("/beers", (req, res) => {
  const requiredProperties = ["name", "taste"];
  const validation = validateProperties(requiredProperties, req.body);
  if (validation.isValid) {
    const newIndex = ++currentIndex;
    const beer = createBeer(req, newIndex);
    if (beer) {
      beers.push(beer);
      const apiResponse = {
        message: "New beer created",
        createdItem: beer,
        links: [...res.hypermedia],
      };
      res.status(201).json(apiResponse);
    } else {
      res.status(500).json({
        message: "Beer creation failed",
      });
    }
  } else {
    res.status(400).json({
      message: "Missing required properties",
      missingFields: validation.missingFields,
    });
  }
});

/**
 * API Controller to return a single beer instance based on an id
 * Returns 404 if the beer with this id is not found
 */
beerRouteController.get("/beers/:id", (req, res) => {
  const { id } = req.params;
  const beer = beers.find((beer) => beer.id === parseInt(id));
  if (beer) {
    res.json(beer);
  } else {
    res.status(404).json({
      message: "Beer not found",
      id: id,
    });
  }
});

/**
 * API Controller to delete a single beer isntance based on an id
 * Returns 404 if the beer with this id is not found. In this case nothing gets deleted
 */
beerRouteController.delete("/beers/:id", (req, res) => {
  const { id } = req.params;
  const beerIndex = beers.findIndex((beer) => beer.id === parseInt(id));
  if (beerIndex !== -1) {
    beers.splice(beerIndex, 1);
    res.json({
      message: "Beer removed",
      id: id,
    });
  } else {
    res.status(404).json({
      message: "Beer not found",
      id: id,
    });
  }
});

/**
 * API Controller to update a single beer instance based on an id
 * Returns 404 if the beer with this id is not found. In this case nothing gets updated
 * Returns 400 if the request body is missing required properties
 */
beerRouteController.put("/beers/:id", (req, res) => {
  const requiredProperties = ["name", "taste"];
  const validation = validateProperties(requiredProperties, req.body);
  if (validation.isValid) {
    const { id } = req.params;
    const beerIndex = beers.findIndex((beer) => beer.id === parseInt(id));
    if (beerIndex !== -1) {
      beers.splice(beerIndex, 1, {
        name: req.body.name,
        taste: req.body.taste,
        id: id,
        links: createBeerLinks(req, id),
      });
      res.json({
        message: "Beer updated",
        updatedItem: beers[beerIndex],
        links: [...res.hypermedia],
      });
    } else {
      res.status(404).json({
        message: "Beer not found",
        id: id,
      });
    }
  } else {
    res.status(400).json({
      message: "Missing required properties",
      missingFields: validation.missingFields,
    });
  }
});

function validateProperties(fields, body) {
  const missingFields = fields.filter((field) => !body.hasOwnProperty(field));
  return {
    isValid: missingFields.length === 0,
    missingFields: missingFields,
  };
}

function createBeer(req, index) {
  const beer = {
    name: req.body.name,
    taste: req.body.taste,
    id: index,
    links: createBeerLinks(req, index),
  };
  return beer;
}

function createBeerLinks(req, index) {
  const links = [
    {
      rel: "self",
      href: `http://${req.headers.host}/api/v1/beers/${index}`,
      action: "GET",
    },
    {
      rel: "edit",
      href: `http://${req.headers.host}/api/v1/beers/${index}`,
      action: "PUT",
    },
    {
      rel: "delete",
      href: `http://${req.headers.host}/api/v1/beers/${index}`,
      action: "DELETE",
    },
  ];

  return links;
}

export default beerRouteController;
