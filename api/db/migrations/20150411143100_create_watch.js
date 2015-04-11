'use strict';

exports.up = function(knex, Promise) {
  
  return knex.schema.hasTable('watches').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('watches', function(t) {
        t.increments('id').primary();
        t.float('mjd', 9, 3);
        t.integer('astro_obj_id').unsigned().notNullable().references('astro_objs.id');
        t.float('flux_rate', 5, 2);
        t.timestamps();
      });
    } else {
      return new Error("The watches table already exists");
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.hasTable('watches').then(function(exists) {
    if (exists) {
      return knex.schema.dropTable('watches');
    }
  });
  
};
