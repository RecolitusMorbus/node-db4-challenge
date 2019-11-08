const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db('recipes');
};

function findById(id) {
  return db('recipes')
    .where({ id })
    .first();
};

function findSteps(id) {
  return db('recipes')
    .join('steps', 'recipes.id', 'steps.recipe_id')
    .where('recipe_id', id)
    .select('steps.step_number', 'step')
    .orderBy('step_number', 'asc');
}

async function add(recipe) {
  const [id] = await db('recipes')
    .insert(recipe);

  return findById(id);
};

function update(changes, id) {
  return db('recipes')
    .where({ id })
    .update(changes);
};

function remove(id) {
  return db('recipes')
    .where({ id })
    .delete();
};