const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('A list of all cars');
})

router.get('/about', (req, res) => {
    res.send('About cars');
})

module.exports = router;