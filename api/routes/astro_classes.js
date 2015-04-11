var express    = require('express');
var router     = express.Router();
var astroClass = require("../models/astro_class");

router.get('/', function (req, res) {
  astroClass.methods.index().then(function (result) { res.send(result); });
});

module.exports = router;
