const express = require('express');
const cors = require("cors");
const app = express();
const port = 3000;

/**
 * This is a small implementation for the Prüfungsleistung.
 * 
 * Usage: npm install in the express folder
 * Open a terminal and run `node christmas.js`
 * Server should be running
 * 
 * Inside the `postman-collections` folder you find a postman example for this api
 */

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

// Articles have the following object notation
// {
//  name: "Test 123"
// }
const articles = [];

const logger = (req, res, next) => {
    console.log(`Received Request ${new Date(Date.now()).toLocaleString('de-DE')}`);
    console.log('HTTP METHOD', req.method);
    console.log('HTTP BODY', req.body);
    console.log('URL PARAMETER', req.params);
    next();
}

app.use(logger);

/**
 * Usage in Postman: http://localhost:3000/articles?name=Test => Returns all articles with name "Test"
 * 
 * Or http://localhost:3000/articles => Returns all articles
 */
app.get('/articles', (req, res) => {
  const name = req.query.name;
  // If an url parameter "name" was provided we only return the articles that matches the search term
  if (name) {
    const result = articles.filter((article) => article.name.toLowerCase().includes(name.toLowerCase()));
    if (result) {
      res.json(result);
    }
  } else {
    res.json(articles);
  }
});

/**
 * Create a new article with a name property
 * 
 * Usage in postman: http://localhost:3000/articles
 * 
 * Returns all articles after creation
 */
app.post('/articles', (req, res) => {
  // The name for the new article that was provided in the request body
  const name = req.body.name;
  // Add the new article to  the articles array
  articles.push({name: name});
  res.json(articles);
});

app.listen(port, () => {
  console.log('Running...');
});