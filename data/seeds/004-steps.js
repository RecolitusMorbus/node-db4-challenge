
exports.seed = function(knex) {
  return knex('steps')
    .truncate()
    .then(function () {
      return knex('steps').insert([
        {
          step_number: 1,
          step: "you get the thing",
          recipe_id: 1
        },
        {
          step_number: 2,
          step: "then you get the other thing",
          recipe_id: 1
        },
        {
          step_number: 3,
          step: "and you put'em together",
          recipe_id: 1
        }
      ]);
    });
};
