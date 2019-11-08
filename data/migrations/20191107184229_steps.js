
exports.up = function(knex) {
  return knex.schema
    .createTable('steps', tbl => {
      tbl.increments();
      tbl
        .integer('step_number')
        .notNullable();
      tbl.string('step', 6000);
      tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('steps');
};
