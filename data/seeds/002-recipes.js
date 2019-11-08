exports.seed = function(knex) {
  return knex("recipes")
    .truncate()
    .then(function() {
      return knex("recipes").insert([
        {
          recipe_name: "Grannys Tacos"
        },
        {
          recipe_name: "Balut"
        },
        {
          recipe_name: "I don't know what you want from me"
        }
      ]);
    });
};
