const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Got a GET request');
});

app.post('/', (req, res)=> {
    res.send('Got a POST request');
});

app.put('/test', (req, res) => {
    res.send('Got a PUT request');
});

app.delete('/test', (req, res) => {
    res.send('Got a DELETE request')
});

app.listen(port, () => {
    console.log('Running...');
});