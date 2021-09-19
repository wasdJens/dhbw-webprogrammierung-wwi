const express = require('express');
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

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
        res.statusCode = 404;
        res.send('No beers available 😭')
        res.end();
    } else {
        res.statusCode = 200;
        res.json(beers);
    }
});

app.post('/beer', (req, res) => {
    if (!req.body.hasOwnProperty('name')) {
        res.statusCode = 400;
        res.send('Missing "name" property');
        res.end();
        return;
    }
    if (!req.body.hasOwnProperty('taste')) {
        res.statusCode = 400;
        res.send('Missing "taste" property');
        res.end();
        return;
    }
    beers.push(req.body);
    res.sendStatus(200);
});

app.delete('/beer/:name', (req, res) => {
    const { name } = req.params;
    if (!name) {
        res.statusCode = 400;
        res.send('Missing "name" parameter');
        res.end();
    } else {
        const beerIndex = beers.findIndex((beer) => beer.name === name);
        if (beerIndex !== -1) {
            beers.splice(beerIndex, 1);
            res.statusCode = 200;
            res.send(`${name} removed!`);
        } else {
            res.statusCode = 404;
            res.send(`${name} not found!`);
        }
    }
})

app.put('/beer/:name', (req, res) => {
    const { name } = req.params;
    if (!req.body.hasOwnProperty('taste')) {
        res.statusCode = 400;
        res.send('Missing "taste" property');
        res.end();
        return;
    }
    const beerIndex = beers.findIndex((beer) => beer.name === name);
    if (beerIndex !== -1) {
        beers.splice(beerIndex, 1, {...beers[beerIndex], taste: req.body.taste});
        res.statusCode = 200;
        res.send(`${name} taste updated`);
    }
})

app.listen(port, () => {
    console.log('Running...');
});