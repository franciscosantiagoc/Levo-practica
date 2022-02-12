const express = require('express');
const morgan = require('morgan');


const server = express();

server.get('/', ()=>console.log('prueba'));

server.use(morgan('dev'));
module.exports = server;