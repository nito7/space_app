'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.hasTable('astro_objs').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('astro_objs', function(t) {
        t.increments('id').primary();
        t.string('name', 128);
        t.float('ra', 7, 3);
        t.float('dec', 7, 3);
        t.integer('astro_class_id').unsigned().notNullable().references('astro_classes.id');
        t.string('link', 2048);
        t.timestamps();
      });
    } else {
      return new Error("The astro_objs table already exists");
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.hasTable('astro_objs').then(function(exists) {
    if (exists) {
      return knex.schema.dropTable('astro_objs');
    }
  });
  
};
