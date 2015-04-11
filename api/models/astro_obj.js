var Promise     = require('bluebird');
var MyBookshelf = require("../bookshelf");
var lightcurve  = require("./lightcurve");
var watch       = require("./watch");
var astroClass  = require("./astro_class");

var AstroObj = MyBookshelf.Model.extend({
  tableName: "astro_objs",
  hasTimestamps: true,
  lightcurves: function () {
    return this.hasMany(lightcurve.model);
  },
  watches: function () {
    return this.hasMany(watch.model);
  },
  astroClass: function () {
    return this.belongsTo(astroClass.model);
  }
});

var AstroObjs = MyBookshelf.Collection.extend({
  model: AstroObj
});



/*---------- ここにメソッド記述 ----------*/




/*---------- 公開メソッドの指定 ----------*/

module.exports = {
  model: AstroObj,
  methods: {

  }
}