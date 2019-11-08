const express = require('express');
// const Recipes = require('../routes/recipe-router.js');

const server = express();

server.use(express.json());
// server.use('/cookery', Recipes);

server.get('/', (req, res) => {
  res.send(`Hey, woah, what're you doing? Ain't no recipes, here, so get.`);
});

module.exports = server;