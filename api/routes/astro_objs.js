var express    = require('express');
var router     = express.Router();
var astroObj = require("../models/astro_obj");

router.get('/', function (req, res) {
  astroObj.methods.index().then(function (result) { res.send(result); });
});

module.exports = router;
