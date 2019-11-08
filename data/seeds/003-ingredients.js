exports.seed = function(knex) {
  return knex('ingredients')
    .truncate()
    .then(function () {
      return knex('ingredients').insert([
        {
          ingredient: 'talapia'
        },
        {
          ingredient: 'shredded cabbage'
        },
        {
          ingredient: 'vinegar'
        }
      ]);
    });
};
