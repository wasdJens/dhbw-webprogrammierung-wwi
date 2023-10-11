import express from 'express';
import cars from './cars';
const app = express();
const port = 8080;

app.use('/cars', cars);

app.listen(port, () => {
    console.log('Running...');
});