'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.hasTable('satellites').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('satellites', function(t) {
        t.increments('id').primary();
        t.string('name', 64);
        t.timestamps();
      });
    } else {
      return new Error("The satellites table already exists");
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.hasTable('satellites').then(function(exists) {
    if (exists) {
      return knex.schema.dropTable('satellites');
    }
  });
};
