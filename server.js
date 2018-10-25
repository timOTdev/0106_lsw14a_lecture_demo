const express = require('express');
const server = express();
const port = 9000;

server.use(express.json());

server.route('/')
  .get((req, res) => res.status(200).json({ Message: 'Good to go!' }))

module.exports = server;