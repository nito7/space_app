var Promise     = require('bluebird');
var MyBookshelf = require("../bookshelf");
var astroObj    = require("./astro_obj");

var Watch = MyBookshelf.Model.extend({
  tableName: "watches",
  hasTimestamps: true,
  astroObj: function () {
    return this.belongsTo(astroObj.model);
  }
});

var Watches = MyBookshelf.Collection.extend({
  model: Watch
});



/*---------- ここにメソッド記述 ----------*/

function index () {
  var resolver = Promise.pending();

  Watches.forge().fetch({withRelated: ["astroObj"]}).then(function (watches) {
    resolver.resolve(watches.toJSON());
  });

  return resolver.promise;
}

function show (id) {
  var resolver = Promise.pending();

  new Watch({id: id}).fetch({withRelated: ["astroObj"]}).then(function (watch) {
    resolver.resolve(watch.toJSON());
  });

  return resolver.promise;
}




/*---------- 公開メソッドの指定 ----------*/

module.exports = {
  model: Watch,
  methods: {
    index: index,
    show:  show
  }
}
