exports.seed = function(knex) {
  return knex('dishes')
    .truncate()
    .then(function () {
      return knex('dishes').insert([
        {
          dish_name: 'Tacos'
        },
        {
          dish_name: 'Pizza'
        },
        {
          dish_name: 'Burgers'
        }
      ]);
    });
};
