'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.hasTable('bands').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('bands', function(t) {
        t.increments('id').primary();
        t.string('name', 32);
        t.timestamps();
      });
    } else {
      return new Error("The bands table already exists");
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.hasTable('bands').then(function(exists) {
    if (exists) {
      return knex.schema.dropTable('bands');
    }
  });
  
};
