'use strict';

exports.up = function(knex, Promise) {

  return knex.schema.hasTable('lightcurves').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('lightcurves', function(t) {
        t.increments('id').primary();
        t.integer('astro_obj_id').unsigned().notNullable().references('astro_objs.id');
        t.integer('satellite_id').unsigned().notNullable().references('satellites.id');
        t.integer('band_id').unsigned().notNullable().references('bands.id'); ;
        t.float('mjd', 9, 3);
        t.float('flux', 8, 5);
        t.float('err', 8, 5);
        t.timestamps();
      });
    } else {
      return new Error("The lightcurves table already exists");
    }
  });
  
};

exports.down = function(knex, Promise) {
  
  return knex.schema.hasTable('lightcurves').then(function(exists) {
    if (exists) {
      return knex.schema.dropTable('lightcurves');
    }
  });
};
