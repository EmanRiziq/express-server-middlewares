'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const validateNum = require('./middlewares/validate-number');
const errorHandler = require('./error-handlers/500');


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  console.log('inside the get method')
  res.status(200).send('Hello World');
})



app.get('/square', validateNum(9),(req, res) => {
    const data = req.squarenum;
        res.status( 200 ).send( `the square of 9 is ${data}` );
  })

  app.use(errorHandler);

function start(port) {
  app.listen(3000, () => console.log(`server up a wake`));
}

module.exports = {
  app: app,
  start: start
}