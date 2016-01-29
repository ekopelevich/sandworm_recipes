exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('ingredients', function(table) {
      table.increments('id').primary();
      table.string('item');
      table.integer('quantity');
      table.integer('measure_id', 11)
        .unsigned()
        .references('col')
        .inTable('measures')
        .references('id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTableIfExists('ingredients')
  ]);
};
