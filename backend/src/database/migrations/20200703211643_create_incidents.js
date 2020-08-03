exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table) {
    table.increments();
    table.string('number').notNullable();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('client').notNullable();
    table.datetime('date').notNullable();
  
    table.string('user_id').notNullable();

    table.foreign('user_id').references('id').inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
