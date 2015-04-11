var Promise     = require('bluebird');
var MyBookshelf = require("../bookshelf");

var AstroClass = MyBookshelf.Model.extend({
  tableName: "astro_classes",
  hasTimestamps: true,
});

var AstroClasses = MyBookshelf.Collection.extend({
  model: AstroClass
});

/*---------- ここにメソッド記述 ----------*/

function index () {
  var resolver = Promise.pending();
  
  AstroClasses.forge().fetch().then(function (astro_classes) {
    resolver.resolve(astro_classes.toJSON());
  });

  return resolver.promise;
}


/*---------- 公開メソッドの指定 ----------*/

module.exports = {
  model: AstroClass,
  methods: {
    index: index
  }
}
