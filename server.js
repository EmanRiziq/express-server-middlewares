'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const validateNum = require('./middlewares/validate-number');
const errorHandler = require('./error-handlers/500');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
})

app.get('/square', validateNum(), (req, res) => {
    const data = req.squarenum;
    res.status(200).send(`the square of ${req.query.num} is ${data}`);
})

app.use(errorHandler);

function start(port) {
    app.listen(port, () => console.log(`server up a wake`));
}

module.exports = {
    app: app,
    start: start
}