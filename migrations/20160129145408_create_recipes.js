exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('recipes', function(table) {
      table.increments('id').primary();
      table.string('title');
      table.string('author');
      table.string('image');
      table.integer('ingredients_id')
        .unsigned()
        .references('col')
        .inTable('ingredients')
        .references('id');
      table.text('directions');
      table.integer('cookTime');
      table.integer('prepTime');
      table.integer('totalTime');
      table.integer('comments_id')
        .unsigned()
        .references('col')
        .inTable('comments')
        .references('id');
      })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTableIfExists('recipes')
  ]);
};
