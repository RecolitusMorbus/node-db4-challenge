exports.seed = function(knex) {
  return knex("recipes")
    .truncate()
    .then(function() {
      return knex("recipes").insert([
        {
          recipe_name: "Grannys Tacos",
          dish_id: 1
        },
        {
          recipe_name: "TexMex Tacos",
          dish_id: 1
        },
        {
          recipe_name: "My Tacos",
          dish_id: 1
        }
      ]);
    });
};
