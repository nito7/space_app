var Bookshelf   = require('bookshelf');
var config      = require("./knexfile").development;
var MyBookshelf = Bookshelf.initialize(config);

module.exports  = MyBookshelf;