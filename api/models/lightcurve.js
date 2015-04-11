var Promise     = require('bluebird');
var MyBookshelf = require("../bookshelf");
var astroObj    = require("./astro_obj");
var satellite   = require("./satellite");
var band        = require("./band");

var Lightcurve = MyBookshelf.Model.extend({
  tableName: "lightcurves",
  hasTimestamps: true,
  astroObj: function () {
    return this.belongsTo(astroObj.model);
  },
  satellite: function () {
    return this.belongsTo(satellite.model);
  },
  band: function () {
    return this.belongsTo(band.model);
  }
});

var Lightcurves = MyBookshelf.Collection.extend({
  model: Lightcurve
});

/*---------- ここにメソッド記述 ----------*/

function show(id) {
  var resolver = Promise.pending();

  new Lightcurve({astro_obj_id: id}).query(function(qb) {
    
    qb.orderBy('mjd', 'ASC');
  }).fetchAll().then(function(lightcurve) {
    resolver.resolve(lightcurve.toJSON());
  });
  
  return resolver.promise;
}

/*---------- 公開メソッドの指定 ----------*/

module.exports = {
  model: Lightcurve,
  methods: {
    show: show
  }
}
