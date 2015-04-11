var Promise     = require('bluebird');
var MyBookshelf = require("../bookshelf");
var lightcurve  = require("./lightcurve");

var Band = MyBookshelf.Model.extend({
  tableName: "bands",
  hasTimestamps: true,
});

var Bands = MyBookshelf.Collection.extend({
  model: Band
});



/*---------- ここにメソッド記述 ----------*/




/*---------- 公開メソッドの指定 ----------*/

module.exports = {
  model: Band,
  methods: {

  }
}
