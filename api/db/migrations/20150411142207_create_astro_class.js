'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.hasTable('astro_classes').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('astro_classes', function(t) {
        t.increments('id').primary();
        t.string('name', 128);
        t.timestamps();
      });
    } else {
      return new Error("The astro_classes table already exists");
    }
  });
  
};

exports.down = function(knex, Promise) {
  return knex.schema.hasTable('astro_classes').then(function(exists) {
    if (exists) {
      return knex.schema.dropTable('astro_classes');
    }
  });
  
};
