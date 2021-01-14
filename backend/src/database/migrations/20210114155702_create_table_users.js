
exports.up = function(knex) {
  return knex.schema.createTable('usuarios', function(table) {
    table.increments('id').primary();
    table.string('email',70).unique().notNullable();
    table.string('battletag',20).unique();
    table.string('plataforma',15);
    table.string('cidade',50);
    table.string('bairro',50);
    table.boolean('ativo').notNullable().defaultTo(1)

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuarios')
};
