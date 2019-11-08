const knex = require('knex');
const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findBySteps,
  add,
  update,
  remove
};

function find() {
  return db('recipes');
};
