'use strict';

exports.seed = function(knex, Promise) {
    return Promise.join(
        // Deletes ALL existing entries
        knex(   'astro_objs').del(), 
        knex('astro_classes').del(), 
        knex(  'lightcurves').del(), 
        knex(      'watches').del(), 
        knex(   'satellites').del(), 
        knex(        'bands').del(), 

        // Inserts seed entries
        knex('astro_classes').insert({
          id   : 1,
          name : "系内 - ブラックホール連星 (BlackHole Binary) (BH)"
        }), 
        knex('satellites').insert({
          id   : 1,
          name : "Fermi"
        }), 
        knex('bands').insert({
          id   : 1,
          name : "12-25 keV"
        }),
        knex('astro_objs').insert({
          id             : 1,
          name           : "GRO J1744-28",
          ra             : 266.138,
          dec            : -28.741,
          astro_class_id : 1,
          link           : "http://simbad.harvard.edu/simbad/sim-basic?Ident=GRO+J1744-28&submit=SIMBAD+search"
        }), 
        knex('watches').insert({
          id           : 1,
          mjd          : 57300.5,
          astro_obj_id : 1,
          flux_rate    : 183.45
        }), 
        knex('lightcurves').insert({
          id           : 1,
          astro_obj_id : 1,
          satellite_id : 1,
          band_id      : 1,
          mjd          : 56700.5,
          flux         : 0.10325,
          err          : 0.02345
        }), 
        knex('lightcurves').insert({
          id           : 2, 
          astro_obj_id : 1,
          satellite_id : 1,
          band_id      : 1,
          mjd          : 56812.5,
          flux         : 0.22222,
          err          : 0.01234
        }), 
        knex('lightcurves').insert({
          id           : 3,
          astro_obj_id : 1,
          satellite_id : 1,
          band_id      : 1,
          mjd          : 56912.5,
          flux         : 0.12222,
          err          : 0.03234
        })
    );
};
