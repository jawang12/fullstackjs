const api = require('express').Router();
const example = require('./example');

api.use('/example', example);




//no routes matched, send to error handler
api.use((req, res, next) => {
  let err = new Error('Route not found');
  err.status = 404;
  next(err);
});

module.exports = api;
