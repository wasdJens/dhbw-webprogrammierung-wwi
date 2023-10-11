import express from 'express';
const app = express();
const port = 3000;

/**
 * The following endpoint will return the query parameter value
 * 
 * It can be used with the following url
 * http://localhost:3000/articles?name=Test
 */
app.get('/articles', (req, res) => {
    const name = req.query.name;
    res.send(name);
});

app.listen(port, () => {
    console.log('Running...');
});