const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    console.log('Got a GET request on `/`');
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log('Running...');
});