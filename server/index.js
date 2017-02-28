const express = require('express');
const app = express();
const morgan = require('morgan');
const { resolve } = require('path');
const bodyParser = require('body-parser');

app
.use(morgan('dev'))
.use(bodyParser.urlencoded({ extended: true }))
.use(bodyParser.json())
.use(express.static(resolve(__dirname, '..', 'public')))
.use('/api', require('./routes'))
.get('/*', (_, res) => {
  res.sendFile(resolve(__dirname, '..', 'public', 'index.html')); //send index.html for all other requests
})
.use((err, req, res, next) => {
  console.error(err, err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error');
});



app.listen(3000, () => {
  console.log('Now listening on port 3000');
});
