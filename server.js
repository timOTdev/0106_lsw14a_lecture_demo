const express = require('express');
const server = express();
const port = 9000;

server.use(express.json());

server.route('/')
  .get((req, res) => res.status(200).json({ message: 'Good to go!' }))

server.route('/hello/:name')
  .post((req, res) => {
    const { name } = req.params;
    const lastName = req.body.lastName || 'Doe';
    res.status(201).json({ hello: `${name} ${lastName}` })
  })
module.exports = server;