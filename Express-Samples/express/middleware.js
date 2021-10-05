// @ts-nocheck
const express = require('express');
const app = express();
const port = 8080;

const logger = (req, res, next) => {
    console.log('LOGGING');
    console.log('HTTP METHOD',req.method);
    next()
}

app.use(logger);

app.get('/', (req, res) => {
    res.send('Hello World');
})

// Sample from https://expressjs.com/en/guide/writing-middleware.html
const requestTime = (req, res, next) => {
    req.requestTime = new Date(Date.now()).toLocaleString('de-DE');
    next();
}

app.use(requestTime);

app.get('/time', (req, res) => {
    var response = 'Hello World!<br>'
    response = `<small>Requested at: ${req.requestTime} </small>`;
    res.send(response);
})

// Error Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
    console.log('Running...');
});