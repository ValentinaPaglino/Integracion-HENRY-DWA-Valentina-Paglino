const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/routes.js');

const server = express();

server.use(express.json())
server.use(morgan('dev'));
server.use(express.urlencoded({extended: true}))
server.use(cors());
server.use(router)

module.exports = server;
