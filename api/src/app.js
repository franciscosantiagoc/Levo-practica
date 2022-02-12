const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index')

const server = express();
server.use(express.json());
server.use(morgan('dev'));

server.use('/', routes);



module.exports = server;