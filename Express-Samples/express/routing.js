const express = require('express');
const app = express();
const port = 8080;

app.all('/pizza', (req, res, next) => {
    console.log('Accessing the pizza location')
    console.log(req.method);
    next();
})

/**
 * Basic route path
 */
app.get('/service', (req, res) => {
    res.send('/service');
})

/**
 * String pattern samples
 * Source: https://expressjs.com/en/guide/routing.html
 */

// Matches acd & abcd
//  app.get('/ab?cd', function (req, res) {
//     res.send('ab?cd')
// })

// Matches abcd, abbcd, abbbcd etc.
// app.get('/ab+cd', function (req, res) {
//     res.send('ab+cd')
// })

// Matches abcd, abxcd, abRANDOMcd, ab123cd etc.
// app.get('/ab*cd', function (req, res) {
//     res.send('ab*cd')
// })

// Matches /abe and /abcde
// app.get('/ab(cd)?e', function (req, res) {
//     res.send('ab(cd)?e')
// })

/**
 * Regex samples
 * Source: https://expressjs.com/en/guide/routing.html
 */

// Matches anything with an a in it
// app.get(/a/, function (req, res) {
//     res.send('/a/')
// })

/**
 * Route Parameters
 */
app.get('/users/:userId', (req, res) => {
    // { userId: "123"}
    res.send(req.params);
});

/**
 * Route Handlers
 */

app.get('/handlers', (req, res, next) => {
    console.log('A different function handles this request...');
    next()
}, (req, res) => {
    res.send('Response from a different callback function')
});

/**
 * app.route sample
 */

app.route('/user')
    .get((req, res) => {
        res.send('Get a user')
    })
    .post((req, res) => {
        res.send('Create a user')
    })
    .put((req, res) => {
        res.send('Update a user')
    })

app.listen(port, () => {
    console.log('Running...');
});