const express = require('express');
const cors = require("cors");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

const beers = [];

const logger = (req, res, next) => {
    console.log(`Received Request ${new Date(Date.now()).toLocaleString('de-DE')}`);
    console.log('HTTP METHOD', req.method);
    console.log('HTTP BODY', req.body);
    console.log('URL PARAMETER', req.params);
    next();
}

app.use(logger);

app.get('/beers', (req, res) => {
    if (beers.length === 0) {
        resolveNotFound(res, `No beers found 🥺`)
    } else {
        res.statusCode = 200;
        res.json(beers);
        res.end();
    }
});

app.get('/beer/:name', (req, res) => {
    const { name } = req.params;
    const beer = getBeer(name);
    if (!beer) {
        resolveNotFound(res, `${name} not found`)
    } else {
        res.statusCode = 200;
        res.json(beer);
        res.end();
    }
})

app.post('/beer', (req, res) => {
    if (!req.body.hasOwnProperty('name')) {
        resolveBadRequest(res, 'Missing "name" property');
    }
    if (!req.body.hasOwnProperty('taste')) {
        resolveBadRequest(res, 'Missing "taste" property');
    }
    beers.push(req.body);
    res.statusCode = 200;
    res.json(req.body);
});

app.delete('/beer/:name', (req, res) => {
    const { name } = req.params;
    if (!name) {
        resolveBadRequest(res, 'Missing "name" property');
    }
    const beerIndex = getBeerIndex(name);
    if (beerIndex !== -1) {
        beers.splice(beerIndex, 1);
        res.statusCode = 200;
        res.send(`${name} removed!`);
    } else {
        resolveNotFound(res, `${name} not found`);
    }
})

app.put('/beer/:name', (req, res) => {
    const { name } = req.params;
    if (!req.body.hasOwnProperty('taste')) {
        resolveBadRequest(res, 'Missing "taste" property')
    }
    const beerIndex = getBeerIndex(name)
    if (beerIndex !== -1) {
        beers.splice(beerIndex, 1, {...getBeer(name), taste: req.body.taste});
        res.statusCode = 200;
        res.send(`${name} taste updated`);
    } else {
        resolveNotFound(res, `${name} not found`);
    }
})

app.listen(port, () => {
    console.log('Running...');
});

function getBeerIndex(name) {
    return beers.findIndex((beer) => beer.name === name);
}

function getBeer(name) {
    return beers.find((beer) => beer.name === name);
}

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
