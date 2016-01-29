exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('comments', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.text('text');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTableIfExists('comments')
  ]);
};
